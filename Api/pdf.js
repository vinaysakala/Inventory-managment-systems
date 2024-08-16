// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Create a new PDF document
// const doc = new PDFDocument();

// // Pipe the PDF into a writable stream (in this case, a file stream)
// const writeStream = fs.createWriteStream('sample.pdf');
// doc.pipe(writeStream);
// const companyName = 'Suvarna';
// const id = 272; 
// function addHeader() {
//     doc
//         .fontSize(12)
//         // .text('Your Company Name :' + companyName, 50, 100, { align: 'left' })
//         // .text('id: ' + id, 50, 120, { align: 'left' })
//         .text('Your Company Name: ' + companyName + ' (id: ' + id + ')', 50, 100, { align: 'left' })
//         .text('Page ' + doc.page.index + 1, 500, 20, { align: 'right' })
//         .moveDown();
// }

// // Add content to the PDF
// doc.fontSize(20).text('Sample PDF Document', { align: 'center' });
// doc.moveDown();
// addHeader();
// doc.fontSize(12).text('This is a sample PDF generated using Node.js and pdfkit.');
// doc.moveDown();
// doc.fontSize(12).text('You can add more content here.');

// // Finalize the PDF
// doc.end();

// console.log('PDF generated successfully.');

// ----------------------
// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Create a new PDF document
// const doc = new PDFDocument();

// // Pipe the PDF into a writable stream (in this case, a file stream)
// const writeStream = fs.createWriteStream('sample.pdf');
// doc.pipe(writeStream);

// const companyName = 'Suvarna'; 
// const id = 272;

// // Function to add header with company name
// function addCompanyNameHeader() {
//     doc
//         .fontSize(12)
//         .text('Your Company Name: ' + companyName, 50, 100, { align: 'left' });
// }

// // Function to add ID
// function addId() {
//     doc
//         .fontSize(12)
//         .text('ID: ' + id, 50, 300, { align: 'left' });
// }

// // Add content to the PDF
// doc.fontSize(20).text('Sample PDF Document', { align: 'center' });
// doc.moveDown();

// // Add the first half of the content (company name)
// addCompanyNameHeader();
// doc.fontSize(12).text('This is a sample PDF generated using Node.js and pdfkit.');
// doc.moveDown();

// // Draw a line to separate the two halves
// doc.moveTo(0, doc.y).lineTo(600, doc.y).stroke();

// // Add the second half of the content (ID)
// doc.moveDown();
// addId();

// // Finalize the PDF
// doc.end();

// console.log('PDF generated successfully.');

// ---------------------
// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Create a new PDF document
// const doc = new PDFDocument();

// // Pipe the PDF into a writable stream (in this case, a file stream)
// const writeStream = fs.createWriteStream('sample.pdf');
// doc.pipe(writeStream);

// const companyName = 'Suvarna';
// const id = 272;
// const salary = '2k';
// // Add content to the PDF
// doc.fontSize(20).text('Sample PDF Document', { align: 'center' });
// doc.moveDown();

// // Create two sections on a single page
// const middle = doc.page.width / 2;
// doc.rect(0, 0, middle, doc.page.height); // Left half
// doc.rect(middle, 0, middle, doc.page.height); // Right half

// // Add company name to the left half
// doc.fontSize(12).text('Your Company Name: ' + companyName, 100, 100, { align: 'left', width: middle - 100 });

// // Add salary below the company name
// // doc.fontSize(12).text('Salary: ' + salary, 100, 110, { align: 'left', width: middle - 100 });

// // Add ID to the right half
// // doc.fontSize(12).text('ID: ' + id, middle + 100, 100, { align: 'left', width: middle - 100 });

// // doc.fontSize(12).text('salary: ' + salary, middle + 100, 100, { align: 'left', width: middle - 100 });

// // // Add table
// // const tableData = [
// //     ['Name', 'Branch'],
// //     ['Thapaswi', 'Suvarna']
// // ];

// // doc.table(tableData, {
// //     prepareHeader: () => doc.font('Helvetica-Bold'),
// //     prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
// // });

// // Draw table manually
// // const tableX = middle + 50;
// // const tableY = 150;
// // const cellWidth = (middle - 150) / 2;
// // const cellHeight = 20;

// // Draw column headers
// // doc.rect(tableX, tableY, cellWidth, cellHeight).fillAndStroke('#CCCCCC');
// // doc.rect(tableX + cellWidth, tableY, cellWidth, cellHeight).fillAndStroke('#CCCCCC');
// // doc.fontSize(12).fillColor('black').text('Name', tableX + 5, tableY + 5);
// // doc.fontSize(12).fillColor('black').text('Branch', tableX + cellWidth + 5, tableY + 5);

// // Draw table content
// // doc.rect(tableX, tableY + cellHeight, cellWidth, cellHeight).fillAndStroke();
// // doc.rect(tableX + cellWidth, tableY + cellHeight, cellWidth, cellHeight).fillAndStroke();
// // doc.fontSize(12).fillColor('black').text('Thapaswi', tableX + 5, tableY + cellHeight + 5);
// // doc.fontSize(12).fillColor('black').text('Suvarna', tableX + cellWidth + 5, tableY + cellHeight + 5);



// // Finalize the PDF
// // doc.end();

// // console.log('PDF generated successfully.');

// -----------------

// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Create anew PDF document
// const doc = new PDFDocument();

// // Pipe the PDF into a writable stream (in this case, a file stream)
// const writeStream = fs.createWriteStream('sample.pdf');
// doc.pipe(writeStream);

// const companyName = 'Suvarna';
// const id = 272;
// const salary = '2k';

// // Calculate the middle value of the page
// const middle = doc.page.width / 2;
// const cellWidth = (middle - 150) / 2;
// const cellHeight = 20;

// // Add content to the PDF
// doc.fontSize(20).text('Sample PDF Document', { align: 'center' });
// doc.moveDown();

// // Create two sections on a single page
// doc.rect(0, 0, middle, doc.page.height); // Left half
// doc.rect(middle, 0, middle, doc.page.height); // Right half

// // Add company name to the left half
// doc.fontSize(12).text('Your Company Name: ' + companyName, 100, 100, { align: 'left', width: middle - 100 });

// // Add salary below the company name
// doc.fontSize(12).text('Salary: ' + salary, 100, 110, { align: 'left', width: middle - 100 });

// // Add ID to the right half
// doc.fontSize(12).text('ID: ' + id, middle + 100, 100, { align: 'left', width: middle - 100 });

// // Create a table
// doc.font('Helvetica').fontSize(12);

// // Header row
// doc.text('ID', 100, 150).text('Name', 100 + cellWidth, 150).text('Salary', 100 + 2 * cellWidth, 150);

// // Table rows
// const data = [
//   { id: 1, name: 'John', salary: 2000 },
//   { id: 2, name: 'Jane', salary: 25}]

//   doc.end();

// ---------------------
// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Create a new PDF document
// const doc = new PDFDocument();

// // Pipe the PDF into a writable stream (in this case, a file stream)
// const writeStream = fs.createWriteStream('sample.pdf');
// doc.pipe(writeStream);

// const tableData = [
//     ['Name', 'Branch', 'Search', 'ENG', 'IN', 'Time', 'Date', 'Name', 'Branch', 'Search', 'ENG', 'IN', 'Time', 'Date'],
//     ['Thapaswi', 'Suvarna', '', '1', '1', '18:49', '21-03-2024', 'Thapaswi', 'Suvarna', '', '1', '1', '18:49', '21-03-2024']
// ];

// const tableWidth = doc.page.width;
// const tableHeight = 800;
// const cellWidth = 90;
// const cellHeight = 20;

// // Add the table to the PDF
// doc.rect(0, 100, tableWidth, tableHeight);
// doc.fontSize(12).text('Table 1', 50, 70, { align: 'center' });
// doc.moveDown();

// const rows = tableData.length;
// const columns = tableData[0].length;

// for (let i = 0; i <= rows; i++) {
//     // Draw horizontal lines
//     if (i < rows) {
//         doc.line(50, 100 + i * cellHeight, 500, 100 + i * cellHeight);
//     }

//     // Draw vertical lines
//     for (let j = 1; j < columns; j++) {
//         if (i < rows) {
//             doc.line(50 + j * cellWidth, 100, 50 + j * cellWidth, 100 + rows * cellHeight);
//         }
//         if (i === 0) {
//         }
//     }
// }

// doc.end();


// ------------------------------

// const PDFDocument = require('pdfkit');
//     const fs = require('fs');

//     // Create anew PDF document
//     const doc = new PDFDocument();

//     // Pipe the PDF into a writable stream (in this case, a file stream)
//     const writeStream = fs.createWriteStream('sample.pdf');
//     doc.pipe(writeStream);

//     const aaa = {
//         companyName: 'Suvarna',
//         id: 272,
//         salary: '2k'
//     };

//     // Calculate the middle value of the page
//     const middle = doc.page.width / 2;
//     const cellWidth = (middle - 150) / 2;
//     const cellHeight = 20;

//     // Add content to the PDF
//     doc.fontSize(20).text('Sample PDF Document', { align: 'center' });
//     doc.moveDown();

//     // Create two sections on a single page
//    // doc.rect(0, 0, middle, doc.page.height); // Left half
//   //  doc.rect(middle, 0, middle, doc.page.height); // Right half

//     const properties = Object.keys(aaa);
//     const startZ = 100;
//     const lineHeight = 10;
//     const spacing = 10;

//     properties.forEach((property, index) => {
//         doc.fontSize(12)
//             .text(`${property}: ${aaa[property]}`, 100 + (index < properties.length / 2 ? 0 : middle), startZ + (index % (properties.length / 2)) * (lineHeight + spacing), { align: 'left', width: middle - 100 });
//         });


//     // Calculate the position for the table
//     const tableStartY = startZ + Math.ceil(properties.length / 2) * (lineHeight + spacing) + 50; // 50 is padding

//     const data = [
//         { id: 1, name: 'John', salary: 2000 },
//         { id: 2, name: 'Jane', salary: 2500 }
//     ];

//     // Set up table parameters
//     const startX = 50;
//     const startY = tableStartY; //tableStartY
//     const rowHeight = 30;
//     const colWidth = 150;
//     const borderWidth = 1;

//     // Header row
//     doc.font('Helvetica').fontSize(12);
//     doc.text('ID', startX, startY).text('Name', startX + colWidth, startY).text('Salary', startX + 2 * colWidth, startY);

//     // Draw horizontal lines
//     for (let i = -1; i <= data.length ; i++) {
//         doc.moveTo(startX, startY + (i + 1) * rowHeight)
//             .lineTo(startX + 3 * colWidth, startY + (i + 1) * rowHeight)
//             .lineWidth(borderWidth)
//             .stroke();
//     }

//     // Draw vertical lines
//     doc.moveTo(startX + colWidth, startY ).lineTo(startX + colWidth, startY + (data.length + 1) * rowHeight).stroke();
//      doc.moveTo(startX + 2 * colWidth, startY ).lineTo(startX + 2 * colWidth, startY + (data.length + 1) * rowHeight).stroke();

//     // Populate data
//     data.forEach((entry, index) => {
//         const rowY = startY + (index + 1) * rowHeight;
//         doc.text(entry.id.toString(), startX, rowY)
//             .text(entry.name, startX + colWidth, rowY)
//             .text(entry.salary.toString(), startX + 2 * colWidth, rowY);
//     });
//     doc.end();


// -------------------------

// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// const data = [
//     { id: 1, name: 'John', salary: 2000 },
//     { id: 2, name: 'Jane', salary: 2500 }
// ];

// // Create a new PDFDocument
// const doc = new PDFDocument();

// // Pipe the PDF content to a file
// doc.pipe(fs.createWriteStream('table.pdf'));

// // Set up table parameters
// const startX = 50;
// const startY = 100; // Start drawing the table from startY
// const rowHeight = 50; // Adjusted row height
// const colWidth = 150;
// const borderWidth = 1;

// // Header row
// doc.font('Helvetica').fontSize(12);
// doc.text('ID', startX, startY).text('Name', startX + colWidth, startY).text('Salary', startX + 2 * colWidth, startY);

// // Draw horizontal lines
// for (let i = -1; i <= data.length ; i++) {
//     doc.moveTo(startX, startY + (i + 1) * rowHeight)
//         .lineTo(startX + 3 * colWidth, startY + (i + 1) * rowHeight)
//         .lineWidth(borderWidth)
//         .stroke();
// }

// // Draw vertical lines
// doc.moveTo(startX + colWidth, startY ).lineTo(startX + colWidth, startY + (data.length + 1) * rowHeight).stroke();
// doc.moveTo(startX + 2 * colWidth, startY ).lineTo(startX + 2 * colWidth, startY + (data.length + 1) * rowHeight).stroke();
// doc.moveTo(startX, startY).lineTo(startX, startY + (data.length + 1) * rowHeight).stroke(); // Vertical line before ID column

// // Populate data
// data.forEach((entry, index) => {
//     const rowY = startY + (index + 1) * rowHeight;
//     doc.text(entry.id.toString(), startX, rowY) // Adjusted position for ID column
//         .text(entry.name, startX + colWidth, rowY)
//         .text(entry.salary.toString(), startX + 2 * colWidth, rowY);
// });

// // Finalize PDF
// doc.end();

// console.log('PDF generated successfully.');

const PDFDocument = require('pdfkit');
const fs = require('fs');

const data = [
    { id: 1, name: 'John', salary: 2000, place: 'Nlr' },
    { id: 2, name: 'Jane', salary: 2500, place: 'Hyd' }
];

// Create a new PDFDocument
const doc = new PDFDocument();

// Pipe the PDF content to a file
doc.pipe(fs.createWriteStream('table.pdf'));

// Set up table parameters
const startX = 50;
const tableEndX = 550; // End position of the table
const startY = 100; // Start drawing the table from startY
const rowHeight = 30;
const properties = Object.keys(data[0]);
console.log(properties.length)
//const colWidth = doc.page.width / properties.length ; //100
const colWidth = (tableEndX - startX) / properties.length;
console.log(doc.page.width)
console.log(colWidth)
const borderWidth = 1;

// Header row
// doc.font('Helvetica').fontSize(12);
// doc.text('ID', startX, startY).text('Name', startX + colWidth, startY).text('Salary', startX + 2 * colWidth, startY).text('place', startX + 3 * colWidth, startY);
doc.font('Helvetica-Bold').fontSize(12);
Object.keys(data[0]).forEach((header, index) => {
    const x = startX + index * colWidth + colWidth / 2 - doc.widthOfString(header) / 2;
    doc.text(header, x, startY);
});

// // Draw horizontal lines
// doc.moveTo(startX, startY + rowHeight)
//     .lineTo(startX + 3 * colWidth, startY + rowHeight)
//     .lineWidth(1)
//     .stroke();


// Draw horizontal lines
for (let i = -1; i <= data.length; i++) {
    // doc.moveTo(startX, startY + (i + 1) * rowHeight)
    //     // .lineTo(startX + 4 * colWidth, startY + (i + 1) * rowHeight)
    //     .lineTo(tableEndX, startY + (i + 1) * rowHeight) // Changed to tableEndX
    //     .lineWidth(borderWidth)
    //     .stroke();
    doc.moveTo(startX, startY + (i + 1) * rowHeight)
        .lineTo(startX + 4 * colWidth, startY + (i + 1) * rowHeight)
        .lineWidth(1)
        .stroke();
}

// Draw vertical lines
// doc.moveTo(startX + colWidth, startY).lineTo(startX + colWidth, startY + (data.length + 1) * rowHeight).stroke();
// doc.moveTo(startX + 2 * colWidth, startY).lineTo(startX + 2 * colWidth, startY + (data.length + 1) * rowHeight).stroke();
// doc.moveTo(startX + 3 * colWidth, startY).lineTo(startX + 3 * colWidth, startY + (data.length + 1) * rowHeight).stroke();
// doc.moveTo(startX, startY).lineTo(startX, startY + (data.length + 1) * rowHeight).stroke(); // Vertical line before ID column
// doc.moveTo(startX + 4 * colWidth, startY).lineTo(startX + 4 * colWidth, startY + (data.length + 1) * rowHeight).stroke(); // Vertical line after Salary column

for (let i = 0; i <= Object.keys(data[0]).length; i++) {
    doc.moveTo(startX + i * colWidth, startY)
        .lineTo(startX + i * colWidth, startY + 3 * rowHeight)
        .lineWidth(1)
        .stroke();
}


// Populate data
doc.font('Helvetica').fontSize(10);
// data.forEach((entry, index) => {
//     const rowY = startY + (index + 1) * rowHeight;
//     doc.text(entry.id.toString(), startX, rowY, { x: 500, y: 500 }) // Adjusted position for ID column
//         .text(entry.name, startX + colWidth, rowY)
//         .text(entry.salary.toString(), startX + 2 * colWidth, rowY)
//         .text(entry.place.toString(), startX + 3 * colWidth, rowY);
//     // doc.text(entry.id.toString(), startX + colWidth/2, rowY, { align: 'center' }) // Adjusted position for ID column
//     // .text(entry.name, startX + colWidth + colWidth/2, rowY, { align: 'center' })
//     // .text(entry.salary.toString(), startX + 2 * colWidth + colWidth/2, rowY, { align: 'center' })
//     // .text(entry.place.toString(), startX + 3 * colWidth+ colWidth/2, rowY, { align: 'center' });
// });
data.forEach((entry, rowIndex) => {
    Object.keys(entry).forEach((key, colIndex) => {
        const value = entry[key].toString();
        const x = startX + colIndex * colWidth + colWidth / 2 - doc.widthOfString(value) / 2;
        const y = startY + (rowIndex + 1) * rowHeight + rowHeight / 2 - doc.currentLineHeight() / 2;
        doc.text(value, x, y);
    });
});

// Finalize PDF
doc.end();

console.log('PDF generated successfully.');


