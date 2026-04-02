# 📁 `style.css`: Complete Line-by-Line Breakdown 📔

This document provides a **literal** explanation for every single line of `style.css`. No lines have been skipped.

| Line # | **Code** | **Detailed Explanation** |
| :--- | :--- | :--- |
| **1** | `@import url(...);` | Downloads the "Outfit" font from Google Fonts to use in our dashboard. |
| **2** | ` ` | Blank line. |
| **3** | `:root {` | Starts a section where we define "Global Variables" for our colors and fonts. |
| **4** | `--primary: #6366f1;` | Variable for the main Indigo color. |
| **5** | `--primary-hover: #4f46e5;` | A slightly darker Indigo for when you hover over buttons. |
| **6** | `--secondary: #ec4899;` | A pinkish color used for accents. |
| **7** | `--bg-dark: #0f172a;` | The dark navy blue color for the background. |
| **8** | `--card-bg: rgba(...);`| A semi-transparent color for the glass cards. |
| **9** | `--glass-border: ...;` | A very thin white border to give a glass-like edge. |
| **10** | `--text-primary: ...;` | The main white color for text. |
| **11** | `--text-muted: ...;` | A gray color for less important text. |
| **12** | `--income: #22c55e;` | Green color for income values. |
| **13** | `--expense: #ef4444;` | Red color for expense values. |
| **14** | `--font-main: ...;` | Sets "Outfit" as our primary font. |
| **15** | `}` | Closes the variable section. |
| **16** | ` ` | Blank line. |
| **17** | `* {` | A special selector that applies to **everything** on the page. |
| **18** | `margin: 0;` | Removes default spacing around elements. |
| **19** | `padding: 0;` | Removes default internal space inside elements. |
| **20** | `box-sizing: ...;` | Ensures padding doesn't make boxes wider than they should be. |
| **21** | `}` | Closes universal styles. |
| **22** | ` ` | Blank line. |
| **23** | `body {` | Styles for the entire web page. |
| **24** | `background: ...;` | Applies the dark navy background color. |
| **25** | `color: ...;` | Applies the primary white text color. |
| **26** | `font-family: ...;` | Applies our "Outfit" font. |
| **27** | `min-height: 100vh;` | Ensures the background covers the full height of the screen. |
| **28** | `overflow-x: hidden;` | Prevents horizontal scrolling, keeping the page clean. |
| **29** | `}` | Closes body styles. |
| **30** | ` ` | Blank line. |
| **31** | `body::before {` | Adds a "ghost" element to draw the top-right glow. |
| **32** | `content: '';` | Required to make the pseudo-element appear. |
| **33** | `position: fixed;` | Keeps the glow in one place even if you scroll. |
| **34** | `top: -100px;` | Moves the glow upward off-screen slightly. |
| **35** | `right: -100px;` | Moves the glow to the right off-screen. |
| **36** | `width: 600px;` | Makes the glow 600 pixels wide. |
| **37** | `height: 600px;` | Makes the glow 600 pixels tall. |
| **38** | `background: ...;` | Uses a radial gradient (circular fade) to draw the indigo glow. |
| **39** | `z-index: -1;` | Pushes the glow behind the text and cards. |
| **40** | `pointer-events: none;`| Ensures you can't accidentally click on the glow. |
| **41** | `}` | Closes top glow styles. |
| **42** | ` ` | Blank line. |
| **43** | `body::after {` | Adds a second "ghost" element for the bottom-left glow. |
| **44** | `content: '';` | Formality. |
| **45** | `position: fixed;` | Keeps the glow stable. |
| **46** | `bottom: -100px;` | Off-screen bottom. |
| **47** | `left: -100px;` | Off-screen left. |
| **48** | `width: 500px;` | 500px width. |
| **49** | `height: 500px;` | 500px height. |
| **50** | `background: ...;` | Draws a pinkish glow. |
| **51** | `z-index: -1;` | Pushes behind. |
| **52** | `pointer-events: none;`| Unclickable. |
| **53** | `}` | Closes bottom glow. |
| **54** | ` ` | Blank line. |
| **55** | `.container {` | Styles for the main box holding your app. |
| **56** | `max-width: 1200px;` | Stops the app from getting too wide on huge monitors. |
| **57** | `margin: 0 auto;` | Centers the app on the screen. |
| **58** | `padding: 40px 20px;` | Adds space around the edges. |
| **59** | `}` | Closes container. |
| **60** | ` ` | Blank line. |
| **61** | `header {` | Styles for the top title area. |
| **62** | `margin-bottom: 40px;` | Adds space below the title. |
| **63** | `display: flex;` | Arrangement tool: puts items side-by-side. |
| **64** | `justify-con...: bit;` | Pushes title to left and date to right. |
| **65** | `align-items: center;` | Aligns them vertically perfectly. |
| **66** | `}` | Closes header. |
| **67** | ` ` | Blank line. |
| **68** | `h1 {` | Styles for the main heading text. |
| **69** | `font-size: 2.5rem;` | Makes the text large. |
| **70** | `font-weight: 700;` | Makes the text bold. |
| **71** | `background: ...;` | Creates a white-to-gray color fade for the letters. |
| **72** | `-webkit-...-clip: text;`| Clips the background strictly inside the letters. |
| **73** | `background-clip: text;` | Standard version of the clipping command. |
| **74** | `-webkit-...-color: ...;`| Makes the actual text invisible so you only see the gradient. |
| **75** | `}` | Closes h1. |
| **76** | ` ` | Blank line. |
| **77** | `/* Glassmorph... */` | Comment label. |
| **78** | `.glass-card {` | Styles for the cards that look like glass. |
| **79** | `background: ...;` | Applies the semi-transparent card color. |
| **80** | `backdrop-filter: blur(12px);`| Blurs the background behind the card (Glass effect). |
| **81** | `-webkit-...blur(12px);`| Safari browser version of blur. |
| **82** | `border: 1px ...;` | Adds the thin white edge. |
| **83** | `border-radius: 24px;`| Rounds the corners of the card. |
| **84** | `padding: 24px;` | Internal space inside the card. |
| **85** | `box-shadow: ...;` | Adds a shadow to make the card "float." |
| **86** | `transition: ...;` | Makes the hover effect smooth (not instant). |
| **87** | `}` | Closes glass card. |
| **88** | ` ` | Blank line. |
| **89** | `.glass-card:hover {` | Styles that activate when you mouse-over a card. |
| **90** | `border: 1px ...;` | Makes the border slightly brighter on hover. |
| **91** | `}` | Closes hover style. |
| **92** | ` ` | Blank line. |
| **93** | `/* Summary Grid */` | Comment. |
| **94** | `.summary-grid {` | Grid for the 3 balance cards at the top. |
| **95** | `display: grid;` | activates the CSS Grid tool. |
| **96** | `grid-temp...: ...;` | Tells the cards to auto-adjust based on screen size. |
| **97** | `gap: 20px;` | Spacing between the 3 cards. |
| **98** | `margin-bottom: 40px;` | Space below the cards. |
| **99** | `}` | Closes summary grid. |
| **100** | ` ` | Blank line. |
| **101** | `.summary-card h3 {` | Styles for the card labels (Total Balance, etc.). |
| **102** | `color: ...;` | Muted gray color. |
| **103** | `font-size: 0.9rem;` | Slightly smaller text. |
| **104** | `text-transf...: uppercase;`| Makes all letters CAPITALized. |
| **105** | `letter-spacing: 0.05em;`| Adds tiny gaps between letters. |
| **106** | `margin-bottom: 12px;`| Space below the label. |
| **107** | `}` | Closes h3. |
| **108** | ` ` | Blank line. |
| **109** | `.summary-card .value {` | Styles for the actual money numbers. |
| **110** | `font-size: 2rem;` | Large numbers. |
| **111** | `font-weight: 700;` | Very bold. |
| **112** | `}` | Closes value. |
| **113** | ` ` | Blank line. |
| **114** | `.summary-ca... .value { ... }`| Makes income numbers GREEN. |
| **115** | `.summary-ca... .value { ... }`| Makes expense numbers RED. |
| **116** | ` ` | Blank line. |
| **117** | `/* Layout Main ... */`| Comment. |
| **118** | `.dashboard-main {` | Styles for the middle section (Form + Charts). |
| **119** | `display: grid;` | activates Grid. |
| **120** | `grid-temp...: 1fr 1.5fr;`| Splits space: 40% for form, 60% for charts. |
| **121** | `gap: 30px;` | Space between form and charts. |
| **122** | `}` | Closes layout. |
| **123** | ` ` | Blank line. |
| **124** | `@media (max-width: 900px) {`| Activates ONLY on phones/tablets. |
| **125** | `    .dashboard-main {` | Mobile version of the layout. |
| **126** | `        grid-temp...: 1fr;`| Switches to 1 vertical column. |
| **127** | `    }` | Closes inner selector. |
| **128** | `}` | Closes media query. |
| **129** | ` ` | Blank line. |
| **130** | `/* Form Styles */` | Comment. |
| **131** | `.form-group {` | Style for each input box container. |
| **132** | `margin-bottom: 20px;`| Space between inputs. |
| **133** | `}` | Closes group. |
| **134** | ` ` | Blank line. |
| **135** | `label {` | Style for labels (Type, Amount, etc.). |
| **136** | `display: block;` | Forces label to stay above the input. |
| **137** | `margin-bottom: 8px;` | Space above the input. |
| **138** | `color: ...;` | Muted gray color. |
| **139** | `font-size: 0.9rem;` | Small text. |
| **140** | `}` | Closes label. |
| **141** | ` ` | Blank line. |
| **142** | `input, select, textarea {`| Styles for all input boxes. |
| **143** | `width: 100%;` | Makes input fill the card width. |
| **144** | `background: rgba(...);`| Slightly darker glass background for inputs. |
| **145** | `border: 1px ...;` | Thin edge. |
| **146** | `border-radius: 12px;`| Rounded corners. |
| **147** | `padding: 12px 16px;` | Spacing inside the box for comfort. |
| **148** | `color: ...;` | White text in input. |
| **149** | `font-family: inherit;`| Uses "Outfit" font choice. |
| **150** | `font-size: 1rem;` | Standard reading size. |
| **151** | `transition: ...;` | Smooth color change when clicking. |
| **152** | `}` | Closes input styles. |
| **153** | ` ` | Blank line. |
| **154** | `option {` | Styles for choices inside dropdown. |
| **155** | `background: ...;` | Matches the dark navy background. |
| **156** | `color: ...;` | White text. |
| **157** | `}` | Closes option. |
| **158** | ` ` | Blank line. |
| **159** | `input:focus, select:focus {`| Styles when you click/type in a box. |
| **160** | `outline: none;` | Removes the default browser orange ring. |
| **161** | `border-color: ...;` | Makes border Indigo when active. |
| **162** | `}` | Closes focus. |
| **163** | ` ` | Blank line. |
| **164** | `.btn-primary {` | Styles for the big "Add Transaction" button. |
| **165** | `width: 100%;` | Full width. |
| **166** | `background: ...;` | Indigo background. |
| **167** | `color: white;` | White text. |
| **168** | `border: none;` | Removes default border. |
| **169** | `border-radius: 12px;`| Rounded corners. |
| **170** | `padding: 14px;` | Big clickable area. |
| **171** | `font-size: 1rem;` | Readable text. |
| **172** | `font-weight: 600;` | Semi-bold text. |
| **173** | `cursor: pointer;` | Shows the "hand" icon when mouse-over. |
| **174** | `transition: ...;` | Smooth background change. |
| **175** | `}` | Closes button. |
| **176** | ` ` | Blank line. |
| **177** | `.btn-primary:hover {` | Response when you hover over the button. |
| **178** | `background: ...;` | Darker indigo background. |
| **179** | `transform: transla...(-2px);`| Makes button "pop up" 2 pixels. |
| **180** | `}` | Closes hover btn. |
| **181** | ` ` | Blank line. |
| **182** | `.btn-primary:active {` | Response when you CLICK the button. |
| **183** | `transform: transla...(0);`| Pushes button "down" to show it was clicked. |
| **184** | `}` | Closes active btn. |
| **185** | ` ` | Blank line. |
| **186** | `/* History List */` | Comment. |
| **187** | `.history-header {` | Styles for the "History" title bar. |
| **188** | `display: flex;` | Arrangement: items in a row. |
| **189** | `justify-con...: bit;` | Title on left, buttons on right. |
| **190** | `align-items: center;` | vertical alignment. |
| **191** | `margin-bottom: 24px;`| Space below history header. |
| **192** | `}` | Closes history header. |
| **193** | ` ` | Blank line. |
| **194** | `.transaction-list {` | Box that holds all previous trasactions. |
| **195** | `max-height: 500px;` | Caps the list height so it doesn't go forever. |
| **196** | `overflow-y: auto;` | Adds a scrollbar if the list is too long. |
| **197** | `padding-right: 10px;`| Space for the scrollbar. |
| **198** | `}` | Closes list box. |
| **199** | ` ` | Blank line. |
| **200** | `.trans-list::-webki... {` | Styles for the scrollbar itself. |
| **201** | `width: 6px;` | Makes scrollbar very thin and modern. |
| **202** | `}` | Closes scrollbar width. |
| **203** | ` ` | Blank line. |
| **204** | `.trans-list::-webki... {` | Style for the scrollbar track (path). |
| **205** | `background: trans...;`| Makes track invisible. |
| **206** | `}` | Closes track. |
| **207** | ` ` | Blank line. |
| **208** | `.trans-list::-webki... {` | Style for the scrollbar "handle" (thumb). |
| **209** | `background: ...;` | Muted color. |
| **210** | `border-radius: 10px;`| Rounded scroll handle. |
| **211** | `}` | Closes thumb. |
| **212** | ` ` | Blank line. |
| **213** | `.transaction-item {` | Styles for each single transaction row. |
| **214** | `display: flex;` | Row arrangement. |
| **215** | `justify-con...: bit;` | Data on left, amount on right. |
| **216** | `align-items: center;` | Vertically centered. |
| **217** | `padding: 16px;` | Comfort space inside row. |
| **218** | `background: rgba(...);`| Subtle darker background for each row. |
| **219** | `border-radius: 16px;`| Rounded corners for row. |
| **220** | `margin-bottom: 12px;`| Spacing between rows. |
| **221** | `border-left: 4px solid ...;`| Default indigo line on the left edge. |
| **222** | `}` | Closes item. |
| **223** | ` ` | Blank line. |
| **224** | `.trans-item.income { ... }`| Overwrites left line to GREEN for income. |
| **225** | `.trans-item.expense { ... }`| Overwrites left line to RED for expense. |
| **226** | ` ` | Blank line. |
| **227** | `.transaction-info h4 {` | Styles for the Category name in list. |
| **228** | `font-size: 1rem;` | Standard size. |
| **229** | `margin-bottom: 4px;` | Space above the description. |
| **230** | `}` | Closes info h4. |
| **231** | ` ` | Blank line. |
| **232** | `.transaction-info p {` | Styles for description/date text. |
| **233** | `font-size: 0.8rem;` | Smaller text. |
| **234** | `color: ...;` | Gray muted color. |
| **235** | `}` | Closes info p. |
| **236** | ` ` | Blank line. |
| **237** | `.transaction-amount {` | Style for the price text box (right side). |
| **238** | `text-align: right;` | Pushes text to the right edge. |
| **239** | `}` | Closes amount box. |
| **240** | ` ` | Blank line. |
| **241** | `.transaction-amount span {` | Style for the price numbers. |
| **242** | `display: block;` | Forces delete button onto a new line. |
| **243** | `font-weight: 700;` | Bold numbers. |
| **244** | `font-size: 1.1rem;` | Slightly larger numbers. |
| **245** | `}` | Closes span. |
| **246** | ` ` | Blank line. |
| **247** | `.delete-btn {` | Styles for the "Trash" icon button. |
| **248** | `background: none;` | Invisible background. |
| **249** | `border: none;` | No border. |
| **250** | `color: ...;` | Red color for "Warning". |
| **251** | `cursor: pointer;` | Hand cursor. |
| **252** | `opacity: 0.6;` | Fades the button slightly so it's not distracting. |
| **253** | `margin-left: 12px;` | Space from the price text. |
| **254** | `}` | Closes delete btn. |
| **255** | ` ` | Blank line. |
| **256** | `.delete-btn:hover {` | Response on hover. |
| **257** | `opacity: 1;` | Makes it bright red when you point at it. |
| **258** | `}` | Closes hover delete. |
| **259** | ` ` | Blank line. |
| **260** | `/* Voice Styles */` | Comment. |
| **261** | `.mic-btn {` | Styles for the circular Microphone button. |
| **262** | `width: 50px;` | 50px width. |
| **263** | `height: 50px;` | 50px height. |
| **264** | `border-radius: 50%;` | Makes the button a perfect circle. |
| **265** | `background: ...;` | Indigo background. |
| **266** | `color: white;` | White icon. |
| **267** | `border: none;` | No border. |
| **268** | `cursor: pointer;` | Hand cursor. |
| **269** | `display: flex;` | Layout: center the icon. |
| **270** | `align-items: center;`| Vertically center icon. |
| **271** | `justify-con...: center;`| Horizontally center icon. |
| **272** | `margin: 10px auto;` | Spacing around button. |
| **273** | `transition: ...;` | Smooth color/scale change. |
| **274** | `box-shadow: ...;` | Glowing shadow. |
| **275** | `}` | Closes mic btn style. |
| **276** | ` ` | Blank line. |
| **277** | `.mic-btn.listening {` | Styles active ONLY while listening. |
| **278** | `background: ...;` | Turns RED while listening. |
| **279** | `animation: pulse-red...;`| Starts the heartbeat "Pulse" animation. |
| **280** | `}` | Closes listening style. |
| **281** | ` ` | Blank line. |
| **282** | `.mic-btn:hover {` | Hover effect. |
| **283** | `transform: scale(1.1);`| Makes it grow 10% larger on hover. |
| **284** | `}` | Closes hover style. |
| **285** | ` ` | Blank line. |
| **286** | `@keyframes pulse-red {` | Defines the logic for the beating animation. |
| **287** | `0% { box-shadow: ...; }`| Starts with no shadow. |
| **288** | `70% { box-shadow: ...; }`| Grows shadow to 15px area. |
| **289** | `100% { box-shadow: ...; }`| Fades out to nothing. |
| **290** | `}` | Closes animation. |
| **291** | ` ` | Blank line. |
| **292** | `.voice-status {` | Styles for the "Click mic..." text. |
| **293** | `text-align: center;` | Centers text. |
| **294** | `font-size: 0.85rem;` | Smaller text. |
| **295** | `color: ...;` | Muted gray. |
| **296** | `margin-top: 8px;` | Space below button. |
| **297** | `font-style: italic;`| Slanted text for style. |
| **298** | `}` | Closes status. |
| **299** | `.charts-container {` | Grid for the charts. |
| **300** | `margin-top: 40px;` | Space above the chart section. |
| **301** | `display: grid;` | Activate Grid. |
| **302** | `grid-temp...: 1.5fr 1fr;`| Splits space for charts. |
| **303** | `gap: 30px;` | Spacing. |
| **304** | `}` | Closes chart container. |
| **305** | ` ` | Blank line. |
| **306** | `@media ... 900px) {` | Phone/Tablet overwrite. |
| **307** | `    .charts-container {`| Target chart container. |
| **308** | `        grid-temp...: 1fr;`| Stack charts vertically. |
| **309** | `    }` | Closes inner. |
| **310** | `}` | Closes media query. |
| **311** | ` ` | Final blank line. |

---
