# 📁 `script.js`: Literal Every-Line Breakdown 📔

This document provides a **complete, no-omission** explanation for every single line of `script.js`.

---

| Line # | **Code** | **Detailed Explanation** |
| :--- | :--- | :--- |
| **1** | `document.addEventListener('DOMContentLoaded', () => {` | Tells the browser to wait until the HTML is fully loaded before running any of the JavaScript code below. |
| **2** | `    const transactionForm = document.getElementById('transaction-form');` | Finds the form where you add transactions and links it to this JS variable. |
| **3** | `    const transactionList = document.getElementById('transaction-list');` | Finds the empty box where the list of transactions will be shown. |
| **4** | `    const totalBalanceEl = document.getElementById('total-balance');` | Links to the "Total Balance" number on your screen. |
| **5** | `    const totalIncomeEl = document.getElementById('total-income');` | Links to the "Total Income" number on your screen. |
| **6** | `    const totalExpenseEl = document.getElementById('total-expense');` | Links to the "Total Expense" number on your screen. |
| **7** | `    const currentDateEl = document.getElementById('current-date');` | Links to the area where today's date is displayed. |
| **8** | `    ` | Blank line. |
| **9** | `    let incomeChartInstance = null;` | A box that will hold the Income donut chart once it's created. |
| **10** | `    let expenseChartInstance = null;` | A box that will hold the Expense donut chart. |
| **11** | ` ` | Blank line. |
| **12** | `    // Set default date to today` | Comment explaining the next line. |
| **13** | `    const today = new Date().toISOString().split('T')[0];` | Gets today's date in 'YYYY-MM-DD' format (e.g., 2024-04-02). |
| **14** | `    document.getElementById('date').value = today;` | Automatically sets the date picker on your screen to today's date. |
| **15** | `    currentDateEl.innerText = new Date().toLocaleDateString(...);` | Formats today's date in a nice way (like "Monday, April 2, 2024") and shows it on the screen. |
| **16** | ` ` | Blank line. |
| **17** | `    // Fetch initial data` | Comment. |
| **18** | `    fetchData();` | Runs the function to go get your existing transactions from the database immediately. |
| **19** | ` ` | Blank line. |
| **20** | `    async function fetchData() {` | Starts a function that can "wait" for data from the internet/server. |
| **21** | `        try {` | Tells the app to "try" the following steps, but don't crash if they fail. |
| **22** | `            const response = await fetch('/api/transactions');` | Reaches out to your Python server and asks for the list of transactions. |
| **23** | `            const data = await response.json();` | Converts the server's response into a format JavaScript understands (JSON). |
| **24** | `            updateUI(data);` | Sends that data to another function to draw it on your screen. |
| **25** | `        } catch (error) {` | If Line 22 or 23 failed (e.g. server is off), this runs. |
| **26** | `            console.error('Error fetching data:', error);` | Prints the error to your browser's console (for debugging). |
| **27** | `        }` | Closes the try-catch block. |
| **28** | `    }` | Closes the `fetchData` function. |
| **29** | ` ` | Blank line. |
| **30** | `    function updateUI(data) {` | A function that updates everything you see on the screen. |
| **31** | `        const { transactions, summary } = data;` | Pulls out the 'transactions' list and the 'summary' totals from the data. |
| **32** | ` ` | Blank line. |
| **33** | `        // Update Summary Cards` | Comment. |
| **34** | `        totalBalanceEl.innerText = formatCurrency(summary.balance);` | Updates the Balance number using the currency formatter (₹). |
| **35** | `        totalIncomeEl.innerText = formatCurrency(summary.total_income);` | Updates the Income number. |
| **36** | `        totalExpenseEl.innerText = formatCurrency(summary.total_expense);` | Updates the Expense number. |
| **37** | ` ` | Blank line. |
| **38** | `        // Update Transaction List` | Comment. |
| **39** | `        transactionList.innerHTML = '';` | Clears the current list of transactions before drawing the new names. |
| **40** | `        if (transactions.length === 0) {` | Checks: "Are there zero transactions in the database?" |
| **41** | `            transactionList.innerHTML = '...No transactions yet...';` | Shows a "No data" message if the list is empty. |
| **42** | `        } else {` | If there IS at least one transaction... |
| **43** | `            transactions.forEach(t => {` | Loops through every single transaction one by one. |
| **44** | `                const item = document.createElement('div');` | Creates a new invisible "box" (div) for this specific transaction. |
| **45** | `                item.className = ...` | Assigns CSS classes so it looks pretty and shows green or red. |
| **46** | `                item.innerHTML = ...` | Sets the text inside: Category, Description, Date, and Amount. |
| **47** | `                    <div class="transaction-info">` | HTML for the left side of the row. |
| **48** | `                        <h4>${t.category}</h4>` | Shows the category name (e.g., Food). |
| **49** | `                        <p>${t.description || ...} • ${t.date}</p>`| Shows notes and the date. |
| **50** | `                    </div>` | Closes left side. |
| **51** | `                    <div class="transaction-amount">` | HTML for the right side of the row. |
| **52** | `                        <span class="${t.type}">...</span>` | Shows the price with a '+' or '-' sign. |
| **53** | `                        <button class="delete-btn" ...>` | Creates the trash bin icon button. |
| **54** | `                            <svg ...>...</svg>` | Draws the trash bin icon using code. |
| **55** | `                        </button>` | Closes delete button. |
| **56** | `                    </div>` | Closes right side. |
| **57** | `                `;` | Closes the HTML template. |
| **58** | `                transactionList.appendChild(item);` | Officially adds this new row to your screen. |
| **59** | `            });` | Closes the loop. |
| **60** | `        }` | Closes the if-else block. |
| **61** | ` ` | Blank line. |
| **62** | `        // Update Charts` | Comment. |
| **63** | `        updateCharts(transactions);` | Runs the code to redraw your donut charts with the new data. |
| **64** | `    }` | Closes `updateUI` function. |
| **65** | ` ` | Blank line. |
| **66** | `    function formatCurrency(amount) {` | A helper tool to turn numbers like 500 into ₹500.00. |
| **67** | `        return new Intl.NumberFormat('en-IN', {` | Uses the official Indian currency formatter. |
| **68** | `            style: 'currency',` | Sets format to Money style. |
| **69** | `            currency: 'INR',` | Sets money type to Indian Rupee. |
| **70** | `        }).format(amount);` | Performs the conversion. |
| **71** | `    }` | Closes format function. |
| **72** | ` ` | Blank line. |
| **73** | `    function updateCharts(transactions) {` | Prepares the data for your two donut charts. |
| **74** | `        const incomeTransactions = transactions.filter(...);` | Creates a new list containing ONLY income items. |
| **75** | `        const expenseTransactions = transactions.filter(...);` | Creates a new list containing ONLY expense items. |
| **76** | ` ` | Blank line. |
| **77** | `        incomeChartInstance = renderChart(...);` | Draws the Income donut chart. |
| **78** | `            ['#4ade80', ..., '#60a5fa']);` | Sets the bright green colors for the income chart segments. |
| **79** | `        expenseChartInstance = renderChart(...);` | Draws the Expense donut chart. |
| **80** | `            ['#fb7185', ..., '#fbbf24']);` | Sets the bright red colors for the expense segments. |
| **81** | `    }` | Closes `updateCharts` function. |
| **82** | ` ` | Blank line. |
| **83** | `    function renderChart(canvasId, transactions, ...) {` | The master function that physically draws a chart in the browser. |
| **84** | `        const categories = {};` | Creates an empty map to store totals (e.g. Food: 500, Rent: 2000). |
| **85** | `        transactions.forEach(t => {` | Loops through the filtered transactions. |
| **86** | `            categories[t.category] = (categories[...] || 0) + float(t.amount);` | Adds up the prices for each category. |
| **87** | `        });` | Closes the loop. |
| **88** | ` ` | Blank line. |
| **89** | `        function float(val) { return parseFloat(val) || 0; }` | Helper to make sure the price is treated as a numeric decimal. |
| **90** | ` ` | Blank line. |
| **91** | `        const labels = Object.keys(categories);` | Gets the names of the categories (Food, Rent, etc.). |
| **92** | `        const values = Object.values(categories);` | Gets the total money spent in those categories. |
| **93** | ` ` | Blank line. |
| **94** | `        if (chartInstance) {` | Checks: "Is there already a chart drawn here?" |
| **95** | `            chartInstance.destroy();` | Erases the old chart so we can draw a fresh one. |
| **96** | `        }` | Closes if block. |
| **97** | ` ` | Blank line. |
| **98** | `        const ctx = document.getElementById(canvasId).getContext('2d');` | Prepares the HTML box where the chart will be "painted." |
| **99** | `        ` | Blank line. |
| **100** | `        if (labels.length === 0) {` | Checks: "Is there any data to show?" |
| **101** | `            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);` | Clears the box if there's no data. |
| **102** | `            ctx.font = '14px Outfit';` | Sets the text font. |
| **103** | `            ctx.fillStyle = '#94a3b8';` | Sets text color to gray. |
| **104** | `            ctx.textAlign = 'center';` | Centers the text. |
| **105** | `            ctx.fillText('No data to display', ...);` | Draws the words "No data to display" inside the empty chart area. |
| **106** | `            return null;` | Stops and returns nothing. |
| **107** | `        }` | Closes if block. |
| **108** | ` ` | Blank line. |
| **109** | `        return new Chart(ctx, {` | The actual command to create the Chart.js visual object. |
| **110** | `            type: 'doughnut',` | Tells Chart.js to make it circular with a hole in the middle. |
| **111** | `            data: {` | Starts the data definition for segments. |
| **112** | `                labels: labels,` | Gives the chart the category names. |
| **113** | `                datasets: [{` | Starts the actual "dataset" (the numbers and colors). |
| **114** | `                    data: values,` | Gives the chart the money totals. |
| **115** | `                    backgroundColor: colors,` | Gives the segments their green or red colors. |
| **116** | `                    borderWidth: 0,` | Removes lines between segments for a cleaner look. |
| **117** | `                    hoverOffset: 12` | Makes a segment "pop out" when you point at it. |
| **118** | `                }]` | Closes dataset. |
| **119** | `            },` | Closes data section. |
| **120** | `            options: {` | Design settings for the chart. |
| **121** | `                responsive: true,` | Ensures chart resizes on phones. |
| **122** | `                maintainAspectRatio: false,` | Allows us to control the height ourselves. |
| **123** | `                plugins: {` | Additional features like legends and tooltips. |
| **124** | `                    legend: {` | The list of category names at the bottom. |
| **125** | `                        position: 'bottom',` | Puts the names below the circle. |
| **126** | `                        labels: {` | Styling for the legend names. |
| **127** | `                            color: '#94a3b8',` | Gray text. |
| **128** | `                            font: { ... },` | Font settings. |
| **129** | `                            padding: 10` | Spacing. |
| **130** | `                        }` | Closes labels. |
| **131** | `                    },` | Closes legend. |
| **132** | `                    tooltip: {` | The box that pop-ups when you hover over data. |
| **133** | `                        callbacks: {` | Code to change how the text looks inside the pop-up. |
| **134** | `                            label: (context) => {` | Custom label function. |
| **135** | `                                let label = context.label || '';`| Gets the category name. |
| **136** | `                                if (label) label += ': ';`| Adds a colon. |
| **137** | `                                if (context.parsed !== null) {`| If there's a number... |
| **138** | `                                    label += formatCurrency(...);` | Adds the money amount in ₹ format. |
| **139** | `                                }` | Closes if. |
| **140** | `                                return label;` | Shows the final pop-up text. |
| **141** | `                            }` | Closes label function. |
| **142** | `                        }` | Closes callbacks. |
| **143** | `                    }` | Closes tooltip. |
| **144** | `                },` | Closes plugins. |
| **145** | `                cutout: '70%'` | Size of the middle hole (70% empty). |
| **146** | `            }` | Closes options. |
| **147** | `        });` | Closes Chart definition. |
| **148** | `    }` | Closes `renderChart` function. |
| **149** | ` ` | Blank line. |
| **150** | `    // Form Submission` | Comment. |
| **151** | `    transactionForm.addEventListener('submit', async (e) => {` | Runs this code when you click "Add Transaction" or press Enter. |
| **152** | `        e.preventDefault();` | Prevents the page from refreshing (Standard SPA behavior). |
| **153** | `        ` | Blank line. |
| **154** | `        const transaction = {` | Collects all data from the form into one object. |
| **155** | `            type: document.getElementById('type').value,` | Gets if it's income or expense. |
| **156** | `            amount: document.getElementById('amount').value,` | Gets the money amount. |
| **157** | `            category: document.getElementById('category').value,` | Gets the picked category. |
| **158** | `            date: document.getElementById('date').value,` | Gets the selected date. |
| **159** | `            description: document.getElementById('description').value` | Gets your notes. |
| **160** | `        };` | Closes transaction object. |
| **161** | ` ` | Blank line. |
| **162** | `        try {` | Safety check. |
| **163** | `            const response = await fetch('/api/transactions', {` | Sends a message to the Python server to save this data. |
| **164** | `                method: 'POST',` | Tells server we are "Post"ing (sending) new data. |
| **165** | `                headers: { 'Content-Type': 'application/json' },` | Tells server data is in JSON format. |
| **166** | `                body: JSON.stringify(transaction)` | Converts our data object to a JSON text string. |
| **167** | `            });` | Closes fetch. |
| **168** | ` ` | Blank line. |
| **169** | `            if (response.ok) {` | If server says "Saved Successfully!"... |
| **170** | `                transactionForm.reset();` | Clears the form so you can add another one. |
| **171** | `                document.getElementById('date').value = today;` | Puts the date back to today. |
| **172** | `                fetchData();` | Updates the screen to show the new item. |
| **173** | `            }` | Closes if. |
| **174** | `        } catch (error) {` | If it failed... |
| **175** | `            console.error('Error adding transaction:', error);` | Shows error in dev console. |
| **176** | `        }` | Closes try-catch. |
| **177** | `    });` | Closes form submit listener. |
| **178** | ` ` | Blank line. |
| **179** | `    // Voice Recognition Implementation` | Comment. |
| **180** | `    const SpeechRecognition = window.Speech...;` | Links to the browser's "Listening Brain" API. |
| **181** | `    const voiceBtn = document.getElementById('voice-btn');` | Links to the mic button on screen. |
| **182** | `    const voiceStatus = document.getElementById('voice-status');` | Links to the status text ("Click mic..."). |
| **183** | `    const micSelect = document.getElementById('mic-select');` | Links to the mic selection dropdown. |
| **184** | ` ` | Blank line. |
| **185** | `    // Fetch and list available microphones` | Comment. |
| **186** | `    async function updateMicList() {` | A tool to find all mics connected to your PC. |
| **187** | `        try {` | Safety. |
| **188** | `            // First request permission ...` | Comment. |
| **189** | `            await navigator.mediaDevices.getUserMedia({ audio: true });` | Asks your permission to use the microphone. |
| **190** | `            const devices = await navigator.mediaDevices.enumerateDevices();` | Gets a list of all speakers and mics. |
| **191** | `            const mics = devices.filter(d => d.kind === 'audioinput');`| Keeps only the actual microphones from the list. |
| **192** | `            ` | Blank line. |
| **193** | `            micSelect.innerHTML = mics.map(m => ` | Creates choices for the dropdown. |
| **194** | `                ...` | Logic to show the mic's real name (like 'USB Mic'). |
| **195** | `            ).join('');` | Puts the list into the dropdown. |
| **196** | `        } catch (err) {` | If you blocked mic access... |
| **197** | `            console.error('Error fetching mics:', err);` | Error log. |
| **198** | `            micSelect.innerHTML = '<option>...denied</option>';` | Tells you on screen that you denied access. |
| **199** | `        }` | Closes try. |
| **200** | `    }` | Closes function. |
| **201** | `    updateMicList();` | Runs the mic finder as soon as the page opens. |
| **202** | ` ` | Blank line. |
| **203** | `    // Mic Visualizer Logic (Web Audio API)` | Comment. |
| **204** | `    let audioCtx = null;` | Container for the audio processing computer. |
| **205** | `    let analyser = null;` | Tool that measures the volume and pitch of sound. |
| **206** | `    let dataArray = null;` | Place to store the numbers from the analyser. |
| **207** | `    let animationId = null;` | Keeps track of the sound bar drawing loop. |
| **208** | `    let currentStream = null;` | Stores the active mic recording session. |
| **209** | ` ` | Blank line. |
| **210** | `    async function initVisualizer() {` | Starts the sound bar animation. |
| **211** | `        try {` | Safety. |
| **212** | `            // Stop current stream ...` | Comment. |
| **213** | `            if (currentStream) {` | Checks if mic is already on. |
| **214** | `                currentStream.getTracks().forEach(...);` | Turns it off so it doesn't double-record. |
| **215** | `            }` | Closes if. |
| **216** | ` ` | Blank line. |
| **217** | `            const deviceId = micSelect.value;` | Gets the mic you picked from the dropdown. |
| **218** | `            const constraints = { ... };` | Settings to use that specific mic. |
| **219** | ` ` | Blank line. |
| **220** | `            currentStream = await nav...getUserMedia(constraints);` | Officially turns on the mic. |
| **221** | `            audioCtx = new (window.AudioContext || ...);` | Powers up the audio processor. |
| **222** | `            analyser = audioCtx.createAnalyser();` | Powers up the pitch analyzer. |
| **223** | `            const source = audioCtx.createMediaStreamSource(...);` | Hooks the mic up to the processor. |
| **224** | `            source.connect(analyser);` | Sends audio into the analyzer. |
| **225** | `            analyser.fftSize = 256;` | Sets the quality of the analysis. |
| **226** | `            const bufferLength = analyser.frequencyBinCount;` | Calculates how many bars to draw. |
| **227** | `            dataArray = new Uint8Array(bufferLength);` | Reserves memory for sound data. |
| **228** | `            drawVisualizer();` | Starts the painting process for the bar. |
| **229** | `        } catch (err) {` | If mic failed to start... |
| **230** | `            console.error('Error initializing...', err);` | Log error. |
| **231** | `        }` | Closes try. |
| **232** | `    }` | Closes function. |
| **233** | ` ` | Blank line. |
| **234** | `    // Update visualizer when mic is changed` | Comment. |
| **235** | `    micSelect.onchange = () => {` | Runs this when you pick a different mic from the list. |
| **236** | `        if (voiceBtn.classList.contains('listening')) {`| Only restart if we are in the middle of listening. |
| **237** | `            initVisualizer();` | Restarts the sound engine for the new mic. |
| **238** | `        }` | Closes if. |
| **239** | `    };` | Closes change listener. |
| **240** | ` ` | Blank line. |
| **241** | `    function drawVisualizer() {` | The loop that draws the bar 60 times every second. |
| **242** | `        const canvas = document.getElementById('mic-visualizer');` | Gets the visual box. |
| **243** | `        const ctx = canvas.getContext('2d');` | Prepares the "Paint brush" tool. |
| **244** | `        const width = canvas.width;` | Gets width of the box. |
| **245** | `        const height = canvas.height;` | Gets height of the box. |
| **246** | ` ` | Blank line. |
| **247** | `        animationId = requestAnimationFrame(drawVisualizer);` | Tells the browser to draw the next frame instantly. |
| **248** | `        analyser.getByteFrequencyData(dataArray);` | Grabs the current loudness from the mic. |
| **249** | ` ` | Blank line. |
| **250** | `        ctx.clearRect(0, 0, width, height);` | Erases the old bar so we can draw a new height. |
| **251** | `        ` | Blank line. |
| **252** | `        let sum = 0;` | Placeholder for total volume. |
| **253** | `        for (let i = 0; i < dataArray.length; i++) {` | Loops through sound frequencies. |
| **254** | `            sum += dataArray[i];` | Adds up all sound levels. |
| **255** | `        }` | Closes loop. |
| **256** | `        let average = sum / dataArray.length;` | Finds the Average volume. |
| **257** | `        let barHeight = (average / 128) * height;` | Translates volume into pixel height. |
| **258** | ` ` | Blank line. |
| **259** | `        // Draw a glowing bar` | Comment. |
| **260** | `        ctx.fillStyle = '#6366f1';` | Sets brush color to Indigo. |
| **261** | `        ctx.shadowBlur = 10;` | Adds a glow effect. |
| **262** | `        ctx.shadowColor = '#6366f1';` | Glow color: Indigo. |
| **263** | `        ctx.beginPath();` | Starts drawing a shape. |
| **264** | `        // Support for older browsers ...` | Comment. |
| **265** | `        if (ctx.roundRect) {` | If browser is modern... |
| **266** | `            ctx.roundRect(10, height - barHeight, width - 20, barHeight, 5);` | Draws a rounded bar. |
| **267** | `        } else {` | If browser is old... |
| **268** | `            ctx.rect(10, height - barHeight, width - 20, barHeight);` | Draws a sharp rectangle. |
| **269** | `        }` | Closes if. |
| **270** | `        ctx.fill();` | Fills the shape with color. |
| **271** | `    }` | Closes animation function. |
| **272** | ` ` | Blank line. |
| **273** | `    if (SpeechRecognition) {` | Checks: "Does this browser support voice commands?" |
| **274** | `        const recognition = new SpeechRecognition();` | Creates the speech engine. |
| **275** | `        recognition.lang = 'en-US';` | Sets language to English. |
| **276** | `        recognition.interimResults = true;` | Allows it to show text WHILE you are still talking. |
| **277** | `        recognition.continuous = false;` | Stops automatically when you finish a sentence. |
| **278** | ` ` | Blank line. |
| **279** | `        voiceBtn.addEventListener('click', () => {` | Runs when you click the mic button. |
| **280** | `            if (voiceBtn.classList.contains('listening')) {`| If we are ALREADY listening... |
| **281** | `                recognition.stop();` | Turns off the speech engine. |
| **282** | `                if (animationId) cancelAnim...;` | Stops the sound bar drawing. |
| **283** | `                // Release the mic` | Comment. |
| **284** | `                if (currentStream) { ... }` | Turns off the actual mic hardware. |
| **285** | `            } else {` | If we are NOT listening yet... |
| **286** | `                recognition.start();` | Starts the speech engine. |
| **287** | `                initVisualizer();` | Starts the sound bar animation. |
| **288** | `                voiceBtn.classList.add('listening');` | Makes button RED to show it's active. |
| **289** | `                voiceStatus.innerText = 'Listening...';`| Shows status message. |
| **290** | `            }` | Closes if. |
| **291** | `        });` | Closes click listener. |
| **292** | ` ` | Blank line. |
| **293** | `        recognition.onresult = (event) => {` | Runs when the computer "understands" what you said. |
| **294** | `            let interimTranscript = '';` | Box for "Guessing" text. |
| **295** | `            let finalTranscript = '';` | Box for "Confirmed" text. |
| **296** | ` ` | Blank line. |
| **297** | `            for (let i = event.resultIndex; ...) {` | Loops through what the browser heard. |
| **298** | `                if (event.results[i].isFinal) {` | If word is confirmed... |
| **299** | `                    finalTranscript += ...` | Add to final box. |
| **300** | `                } else {` | If word is still a guess... |
| **301** | `                    interimTranscript += ...` | Add to interim box. |
| **302** | `                }` | Closes if. |
| **303** | `            }` | Closes loop. |
| **304** | `            ` | Blank line. |
| **305** | `            const fullTranscript = (...).toLowerCase();`| Combines guesses and final text into simple lowercase text. |
| **306** | `            voiceStatus.innerText = Hearing: ...;` | Shows what it's hearing on screen. |
| **307** | `            ` | Blank line. |
| **308** | `            if (finalTranscript) {` | If you have finished your sentence... |
| **309** | `                voiceStatus.innerText = Heard: ...;` | Shows the final sentence. |
| **310** | `                parseVoiceCommand(fullTranscript);` | Sends text to the AI "Parser" to fill the form. |
| **311** | `            }` | Closes if result final. |
| **312** | `        };` | Closes onresult event. |
| **313** | `        ` | Blank line. |
| **314** | `        recognition.onerror = (event) => {` | Runs if voice fails (Network error, etc.). |
| **315** | `            let errorMessage = 'Error occurred.';` | Default message. |
| **316** | `            if (event.error === 'network') { ... }` | Specific error for internet loss. |
| **317** | `            else if (event.error === 'not-allowed') { ... }`| Specific error for Mic blocked. |
| **318** | `            else if (event.error === 'no-speech') { ... }`| Specific error for Silence. |
| **319** | `            else { ... }` | General Error. |
| **320** | `            ` | Blank line. |
| **321** | `            voiceStatus.innerText = ... Demo.`; | Shows error message + "Click for Demo". |
| **322** | `            voiceStatus.style.color = '#ef4444'`; | Turns text RED. |
| **323** | `            voiceStatus.style.cursor = 'pointer';`| Shows hand cursor on error text. |
| **324** | `            voiceBtn.classList.remove('listening');`| Stops button animation. |
| **325** | `            ` | Blank line. |
| **326** | `            // Fallback for interview ...` | Comment: Adds a demo mode for the interviewer. |
| **327** | `            voiceStatus.onclick = () => {` | If you click the error message... |
| **328** | `                const demoTranscript = ...;` | Fakes a "Voice Entry" of ₹500 for lunch. |
| **329** | `                parseVoiceCommand(demoTranscript);` | Processes the fake entry. |
| **330** | `            };` | Closes click handler. |
| **331** | `            ` | Blank line. |
| **332** | `            setTimeout(() => { ... }, 5000);` | Clears the error after 5 seconds automatically. |
| **333** | `        };` | Closes error handler. |
| **334** | ` ` | Blank line. |
| **335** | `        recognition.onend = () => {` | Runs when listening stops. |
| **336** | `            voiceBtn.classList.remove('listening');` | Resets button color. |
| **337** | `        };` | Closes onend. |
| **338** | `    } else {` | If browser is too old for voice... |
| **339** | `        voiceBtn.style.display = 'none';` | Hides the mic button. |
| **340** | `    }` | Closes speech recognition check. |
| **341** | ` ` | Blank line. |
| **342** | `    function parseVoiceCommand(text) {` | The "Intelligence" function that understands your words. |
| **343** | `        // Extract Amount ...` | Comment. |
| **344** | `        const amountMatch = text.match(/\d+(\.\d+)?/);`| Uses a Regex to find numbers in your sentence. |
| **345** | `        const amount = amountMatch ? ... : null;` | Saves the number found (like 500.50). |
| **346** | ` ` | Blank line. |
| **347** | `        // Determine Type` | Comment. |
| **348** | `        let type = 'expense';` | Default is 'expense'. |
| **349** | `        if (text.includes('income') || ... ) {` | If words like "Salary" are heard, switch to income. |
| **350** | `            type = 'income';` | Sets type to income. |
| **351** | `        }` | Closes if. |
| **352** | ` ` | Blank line. |
| **353** | `        // Determine Category` | Comment. |
| **354** | `        const categories = { ... };` | A list of keywords linked to project categories. |
| **355** | `            'food': 'Food', 'lunch': 'Food', ...` | Maps "Lunch" to "Food". |
| **356** | `            'salary': 'Salary', ...` | Maps "Salary" to "Salary". |
| **357** | `            'bus': 'Transport', ...` | Maps "Bus" to "Transport". |
| **358** | `        };` | Closes mapping list. |
| **359** | ` ` | Blank line. |
| **360** | `        let foundCategory = 'Other';` | Default is 'Other'. |
| **361** | `        for (const [key, value] of ...) {` | Loops through your keywords list. |
| **362** | `            if (text.includes(key)) {` | If heard word matches a keyword... |
| **363** | `                foundCategory = value;` | Sets the correct category. |
| **364** | `                break;` | Stops searching once found. |
| **365** | `            }` | Closes if. |
| **366** | `        }` | Closes loop. |
| **367** | ` ` | Blank line. |
| **368** | `        // Auto-fill form` | Comment. |
| **369** | `        if (amount) document.get...value = amount;` | Physically types the amount into the screen's box. |
| **370** | `        document.getElement...value = type;` | Picks the type in the dropdown. |
| **371** | `        document.getElement...value = foundCategory;` | Picks the category in the dropdown. |
| **372** | `        document.getElement...value = '';` | Clears the description box. |
| **373** | `        ` | Blank line. |
| **374** | `        voiceStatus.innerText = Matched: ...;` | Confirms what itunderstood on screen. |
| **375** | `        ` | Blank line. |
| **376** | `        // Auto-Submit Feature` | Comment. |
| **377** | `        if (text.includes('add') || ... ) {` | If you said "Add" or "Confirm"... |
| **378** | `            voiceStatus.innerText = "Auto-saving...";`| Shows auto-save message. |
| **379** | `            setTimeout(() => { ... }, 1500);` | Waits 1.5 seconds, then clicks "Save" for you. |
| **380** | `        }` | Closes auto-submit. |
| **381** | `    }` | Closes `parseVoiceCommand`. |
| **382** | ` ` | Blank line. |
| **383** | `    // Global delete function` | Comment. |
| **384** | `    window.deleteTransaction = async (id) => {` | Tool to remove a transaction permanently. |
| **385** | `        if (!confirm('Are you...')) return;` | Pops up a "Are you sure?" box. |
| **386** | `        ` | Blank line. |
| **387** | `        try {` | Safety. |
| **388** | `            const response = await fetch(...);` | Tells the server to DELETE that ID from MySQL. |
| **389** | `                method: 'DELETE'` | Uses the special "DELETE" web command. |
| **390** | `            });` | Closes fetch. |
| **391** | ` ` | Blank line. |
| **392** | `            if (response.ok) { ... fetchData(); ... }`| If deleted, refreshes the screen data. |
| **393** | `        } catch (error) { ... }` | Error handle. |
| **394** | `    };` | Closes delete function. |
| **395** | `});` | Closes the initial `DOMContentLoaded` started on Line 1. |
| **396** | ` ` | Final blank line. |

---
