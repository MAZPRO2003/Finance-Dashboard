document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const totalBalanceEl = document.getElementById('total-balance');
    const totalIncomeEl = document.getElementById('total-income');
    const totalExpenseEl = document.getElementById('total-expense');
    const currentDateEl = document.getElementById('current-date');
    
    let incomeChartInstance = null;
    let expenseChartInstance = null;

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
    currentDateEl.innerText = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    fetchData();

    async function fetchData() {
        try {
            const response = await fetch('/api/transactions');
            const data = await response.json();
            updateUI(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function updateUI(data) {
        const { transactions, summary } = data;

        totalBalanceEl.innerText = formatCurrency(summary.balance);
        totalIncomeEl.innerText = formatCurrency(summary.total_income);
        totalExpenseEl.innerText = formatCurrency(summary.total_expense);

        transactionList.innerHTML = '';
        if (transactions.length === 0) {
            transactionList.innerHTML = '<p class="text-muted" style="text-align: center; padding: 20px;">No transactions yet.</p>';
        } else {
            transactions.forEach(t => {
                const item = document.createElement('div');
                item.className = `transaction-item ${t.type}`;
                item.innerHTML = `
                    <div class="transaction-info">
                        <h4>${t.category}</h4>
                        <p>${t.description || 'No description'} • ${t.date}</p>
                    </div>
                    <div class="transaction-amount">
                        <span class="${t.type}">${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}</span>
                        <button class="delete-btn" onclick="deleteTransaction(${t.id})">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                `;
                transactionList.appendChild(item);
            });
        }

        updateCharts(transactions);
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    }

    function updateCharts(transactions) {
        const incomeTransactions = transactions.filter(t => t.type === 'income');
        const expenseTransactions = transactions.filter(t => t.type === 'expense');

        incomeChartInstance = renderChart('incomeChart', incomeTransactions, incomeChartInstance, 'Income Analysis', 
            ['#4ade80', '#2dd4bf', '#34d399', '#4fd1c5', '#818cf8', '#60a5fa']);
        expenseChartInstance = renderChart('expenseChart', expenseTransactions, expenseChartInstance, 'Expense Analysis', 
            ['#fb7185', '#f87171', '#fb923c', '#f472b6', '#a78bfa', '#fbbf24']);
    }

    function renderChart(canvasId, transactions, chartInstance, title, colors) {
        const categories = {};
        transactions.forEach(t => {
            categories[t.category] = (categories[t.category] || 0) + float(t.amount);
        });

        function float(val) { return parseFloat(val) || 0; }

        const labels = Object.keys(categories);
        const values = Object.values(categories);

        if (chartInstance) {
            chartInstance.destroy();
        }

        const ctx = document.getElementById(canvasId).getContext('2d');
        
        if (labels.length === 0) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.font = '14px Outfit';
            ctx.fillStyle = '#94a3b8';
            ctx.textAlign = 'center';
            ctx.fillText('No data to display', ctx.canvas.width / 2, ctx.canvas.height / 2);
            return null;
        }

        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: colors,
                    borderWidth: 0,
                    hoverOffset: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            font: { family: 'Outfit', size: 11 },
                            padding: 10
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                let label = context.label || '';
                                if (label) label += ': ';
                                if (context.parsed !== null) {
                                    label += formatCurrency(context.parsed);
                                }
                                return label;
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });
    }

    transactionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const transaction = {
            type: document.getElementById('type').value,
            amount: document.getElementById('amount').value,
            category: document.getElementById('category').value,
            date: document.getElementById('date').value,
            description: document.getElementById('description').value
        };

        try {
            const response = await fetch('/api/transactions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(transaction)
            });

            if (response.ok) {
                transactionForm.reset();
                document.getElementById('date').value = today;
                fetchData();
            }
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const voiceBtn = document.getElementById('voice-btn');
    const voiceStatus = document.getElementById('voice-status');
    const micSelect = document.getElementById('mic-select');

    async function updateMicList() {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            const devices = await navigator.mediaDevices.enumerateDevices();
            const mics = devices.filter(d => d.kind === 'audioinput');
            
            micSelect.innerHTML = mics.map(m => 
                `<option value="${m.deviceId}">${m.label || 'Microphone ' + (mics.indexOf(m) + 1)}</option>`
            ).join('');
        } catch (err) {
            console.error('Error fetching mics:', err);
            micSelect.innerHTML = '<option>Microphone permission denied</option>';
        }
    }
    updateMicList();

    let audioCtx = null;
    let analyser = null;
    let dataArray = null;
    let animationId = null;
    let currentStream = null;

    async function initVisualizer() {
        try {
            if (currentStream) {
                currentStream.getTracks().forEach(track => track.stop());
            }

            const deviceId = micSelect.value;
            const constraints = {
                audio: deviceId ? { deviceId: { exact: deviceId } } : true
            };

            currentStream = await navigator.mediaDevices.getUserMedia(constraints);
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            const source = audioCtx.createMediaStreamSource(currentStream);
            source.connect(analyser);
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
            drawVisualizer();
        } catch (err) {
            console.error('Error initializing visualizer:', err);
        }
    }

    micSelect.onchange = () => {
        if (voiceBtn.classList.contains('listening')) {
            initVisualizer();
        }
    };

    function drawVisualizer() {
        const canvas = document.getElementById('mic-visualizer');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        animationId = requestAnimationFrame(drawVisualizer);
        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, width, height);
        
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
        }
        let average = sum / dataArray.length;
        let barHeight = (average / 128) * height;

        ctx.fillStyle = '#6366f1';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#6366f1';
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(10, height - barHeight, width - 20, barHeight, 5);
        } else {
            ctx.rect(10, height - barHeight, width - 20, barHeight);
        }
        ctx.fill();
    }

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = true;
        recognition.continuous = false;

        voiceBtn.addEventListener('click', () => {
            if (voiceBtn.classList.contains('listening')) {
                recognition.stop();
                if (animationId) cancelAnimationFrame(animationId);
                if (currentStream) {
                    currentStream.getTracks().forEach(track => track.stop());
                    currentStream = null;
                }
            } else {
                recognition.start();
                initVisualizer();
                voiceBtn.classList.add('listening');
                voiceStatus.innerText = 'Listening...';
            }
        });

        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            
            const fullTranscript = (finalTranscript || interimTranscript).toLowerCase();
            voiceStatus.innerText = `Hearing: "${fullTranscript}"...`;
            
            if (finalTranscript) {
                voiceStatus.innerText = `Heard: "${fullTranscript}"`;
                parseVoiceCommand(fullTranscript);
            }
        };
        
        recognition.onerror = (event) => {
            let errorMessage = 'Error occurred.';
            if (event.error === 'network') {
                errorMessage = 'Voice requires internet connection.';
            } else if (event.error === 'not-allowed') {
                errorMessage = 'Microphone permission denied.';
            } else if (event.error === 'no-speech') {
                errorMessage = 'No speech detected. Try again.';
            } else {
                errorMessage = 'Voice Error: ' + event.error;
            }
            
            voiceStatus.innerText = errorMessage + " Click for Demo.";
            voiceStatus.style.color = '#ef4444';
            voiceStatus.style.cursor = 'pointer';
            voiceBtn.classList.remove('listening');
            
            voiceStatus.onclick = () => {
                const demoTranscript = "add expense 500 for lunch";
                voiceStatus.innerText = `Demo Mode: "${demoTranscript}"`;
                parseVoiceCommand(demoTranscript);
                voiceStatus.style.color = 'var(--primary)';
            };
            
            setTimeout(() => {
                if (voiceStatus.innerText.includes(errorMessage)) {
                    voiceStatus.innerText = '';
                    voiceStatus.style.color = '';
                    voiceStatus.style.cursor = '';
                    voiceStatus.onclick = null;
                }
            }, 5000);
        };

        recognition.onend = () => {
            voiceBtn.classList.remove('listening');
        };
    } else {
        voiceBtn.style.display = 'none';
        voiceStatus.innerText = 'Voice commands not supported in this browser.';
    }

    function parseVoiceCommand(text) {
        const amountMatch = text.match(/\d+(\.\d+)?/);
        const amount = amountMatch ? amountMatch[0] : null;

        let type = 'expense';
        if (text.includes('income') || text.includes('salary') || text.includes('received') || text.includes('plus')) {
            type = 'income';
        }

        const categories = {
            'food': 'Food', 'dining': 'Food', 'eat': 'Food', 'lunch': 'Food', 'dinner': 'Food', 'coffee': 'Food',
            'rent': 'Rent', 'house': 'Rent', 'bill': 'Rent',
            'salary': 'Salary', 'pay': 'Salary', 'freelance': 'Salary',
            'movie': 'Entertainment', 'game': 'Entertainment', 'fun': 'Entertainment', 'netflix': 'Entertainment',
            'bus': 'Transport', 'taxi': 'Transport', 'uber': 'Transport', 'travel': 'Transport', 'fuel': 'Transport',
            'shop': 'Shopping', 'buy': 'Shopping', 'dress': 'Shopping', 'amazon': 'Shopping'
        };

        let foundCategory = 'Other';
        for (const [key, value] of Object.entries(categories)) {
            if (text.includes(key)) {
                foundCategory = value;
                break;
            }
        }

        if (amount) document.getElementById('amount').value = amount;
        document.getElementById('type').value = type;
        document.getElementById('category').value = foundCategory;
        document.getElementById('description').value = '';
        
        voiceStatus.innerText = `Matched: ${type} of ₹${amount || '?'} for ${foundCategory}`;
        
        if (text.includes('add') || text.includes('save') || text.includes('confirm') || text.includes('post')) {
            voiceStatus.innerText = "🚀 Auto-saving transaction...";
            setTimeout(() => {
                transactionForm.dispatchEvent(new Event('submit'));
            }, 1500);
        }
    }

    window.deleteTransaction = async (id) => {
        if (!confirm('Are you sure you want to delete this transaction?')) return;
        
        try {
            const response = await fetch(`/api/transactions/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };
});
