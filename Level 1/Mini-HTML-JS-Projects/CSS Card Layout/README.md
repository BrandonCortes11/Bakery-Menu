🧠 Profile Card Gallery – Flexbox & Grid Beginner Project
Welcome, mentees! 👋
This is your very first layout project using Flexbox and Grid. You’ll build a “Profile Card Gallery” where cards are arranged side-by-side and in rows using CSS.

💡 First: What Is a Layout?
A layout is how things are arranged on a webpage. Just like how furniture is placed in a room, a layout is how boxes (elements) are arranged on the screen.

👨‍👩‍👧 Parent and Children Explained
In HTML and CSS, we describe elements as parents and children.

The parent is like a big box (container) that holds smaller boxes.
The children are the items inside that box.
📦 Analogy:
Imagine a bookshelf (parent) holding books (children).
You can choose whether the books line up in a row, stack up, or fill a grid.

📦 What Is Flexbox?
Flexbox is a layout tool in CSS that helps you arrange items in one direction — either in a row (left to right) or a column (top to bottom).

When to Use It:
Use Flexbox when you want items to:

Sit side-by-side in a row
Stack on top of each other
Wrap to the next line when there isn’t enough space
Be centered easily
🧱 Flexbox Properties Explained
📂 Parent Properties (apply to the container of cards)
Property	What It Does	Easy Analogy
display: flex;	Turns on Flexbox. Required to use Flexbox.	"Start arranging things in a line."
flex-direction:	Choose direction: row (default) or column.	"Line up books left to right or top to bottom."
justify-content:	Align items horizontally.	"Spread the books across the shelf."
align-items:	Align items vertically.	"Move books up/down on the shelf."
flex-wrap:	Let items go to a new line if there isn’t enough space.	"Add another row on the bookshelf."
gap:	Adds space between items.	"Leave space between each book."
📄 Children Properties (apply to the cards inside)
Property	What It Does	Easy Analogy
flex-grow:	Makes an item grow to take up space.	"This book stretches to fill the shelf."
flex-shrink:	Allows item to shrink if needed.	"This book gets squished to fit."
flex-basis:	Sets the item’s starting size.	"Start each book at 200px wide."
align-self:	Align one item differently than the rest.	"One book floats to the top."
🗃️ What Is Grid?
CSS Grid lets you place items in both rows and columns. It gives you a grid-like structure similar to a spreadsheet.

When to Use It:
Use Grid when you want:

A table-like structure
Multiple rows and columns
Total control over item placement
🧱 Grid Properties Explained
📂 Parent Properties (apply to the grid container)
Property	What It Does	Easy Analogy
display: grid;	Turns on Grid layout	"Build a grid shelf."
grid-template-columns:	Defines the number and size of columns	"I want 3 equal shelves: repeat(3, 1fr)"
grid-template-rows:	Defines row heights	"Set how tall each row is."
gap:	Space between columns and rows	"Leave space between grid items."
justify-items:	Align items horizontally inside each cell	"Push the book left, center, or right in its slot."
align-items:	Align items vertically inside each cell	"Push the book up/down in its slot."
justify-content:	Align the whole grid left, center, or right	"Move the entire bookshelf left/right."
align-content:	Align the whole grid top/bottom	"Move the bookshelf up/down."
📄 Children Properties (apply to items in the grid)
Property	What It Does	Easy Analogy
grid-column:	Span across columns	"This book takes up two shelf spaces."
grid-row:	Span across rows	"This book takes up two rows of space."
justify-self:	Align one item inside its cell horizontally	"Center this book inside its cell."
align-self:	Align one item inside its cell vertically	"Push this book to the top of its cell."
🔨 Project Summary
You will build two sections:

🔹 Flexbox Section:
A <section class="flex-container">
Inside: 3 cards with profile image, name, and title
🔹 Grid Section:
A <section class="grid-container">
Inside: 3 cards styled and aligned using Grid
🔍 The Main Difference
Layout Tool	Flexbox	Grid
Direction	One-direction (row OR column)	Two-direction (rows AND columns)
Layout Type	1D layout	2D layout
Good for...	Lining things up in a row or column (like a nav bar)	Creating full grids or galleries
Think of it like...	A row of books or a single stack of boxes	A spreadsheet or chessboard
📘 Tips for Success
Only Flexbox or Grid properties work after you write display: flex or display: grid.
Use the box of books analogy to understand layout behavior.
Practice by changing values and see how things move!
🏁 You Did It!
Once you've followed the instructions in the comments of your files, you'll have a responsive, beautiful card layout — and you'll understand the basics of CSS layout design.