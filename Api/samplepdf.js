
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a new PDFDocument
const doc = new PDFDocument();

// Pipe the PDF content to a file
doc.pipe(fs.createWriteStream('table.pdf'));

const aaa = {
            companyName: 'Suvarna',
            id: 272,
            salary: '2k',
            place:'Nellore',
            DOb:'25-july-1996'
        };
    
        // Calculate the middle value of the page
        const middle = doc.page.width / 2;
        const cellWidth = (middle - 150) / 2;
        const cellHeight = 20;
    
        // Add content to the PDF
        // doc.fontSize(20).text('Sample PDF Document', { align: 'center' });
        doc.moveDown();
    
        // Create two sections on a single page
       // doc.rect(0, 0, middle, doc.page.height); // Left half
      //  doc.rect(middle, 0, middle, doc.page.height); // Right half
    
        const objproperties = Object.keys(aaa);
        const startZ = 100;
        const lineHeight = 10;
        const spacing = 10;
    
        objproperties.forEach((property, index) => {
            doc.fontSize(12)
                .text(`${property}: ${aaa[property]}`, 100 + (index < objproperties.length / 2 ? 0 : middle), startZ + (index % (objproperties.length / 2)) * (lineHeight + spacing), { align: 'left', width: middle - 100 });
            });
    
    
        // Calculate the position for the table
        const tableStartY = startZ + Math.ceil(objproperties.length / 2) * (lineHeight + spacing) + 50; // 50 is padding
    

const data = [
    { id: 1, name: 'John', salary: 2000, place: 'Nlr' },
    { id: 2, name: 'Jane', salary: 2500, place: 'Hyd' }
];


// Set up table parameters
const startX = 50;
const tableEndX = 550; // End position of the table
const startY = tableStartY; // Start drawing the table from startY
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


// Draw horizontal lines
for (let i = -1; i <= data.length; i++) {
    doc.moveTo(startX, startY + (i + 1) * rowHeight)
        .lineTo(startX + 4 * colWidth, startY + (i + 1) * rowHeight)
        .lineWidth(1)
        .stroke();
}

// Draw vertical lines
for (let i = 0; i <= Object.keys(data[0]).length; i++) {
    doc.moveTo(startX + i * colWidth, startY)
        .lineTo(startX + i * colWidth, startY + 3 * rowHeight)
        .lineWidth(1)
        .stroke();
}


// Populate data
doc.font('Helvetica').fontSize(10);
data.forEach((entry, rowIndex) => {
    Object.keys(entry).forEach((key, colIndex) => {
        const value = entry[key].toString();
        const x = startX + colIndex * colWidth + colWidth / 2 - doc.widthOfString(value) / 2;
        const y = startY + (rowIndex + 1) * rowHeight + rowHeight / 2 - doc.currentLineHeight() / 2;
        doc.text(value, x, y);
    });
});


// Company name
// const companyNameY = startY + (data.length + 1) * rowHeight + 20;
// const companyNameX = startX + colWidth; // Aligning with the table
// doc.fontSize(12).text('Company Name: Suvarna', companyNameX, companyNameY, { align: 'center' });


const aaa1 = {
    companyName: 'Suvarna',
    id: 272,
    salary: '2k',
    place:'Nellore',
    DOb:'25-july-1996'
};
// Set up table parameters
const startX1 = 50;
const startY1 = 50;
const rowHeight1 = 30;
const colWidth1 = 150;
const borderWidth1 = 1;

// Add content to the PDF
doc.font('Helvetica').fontSize(12);

// Populate data
const keys = Object.keys(aaa1);
const values = Object.values(aaa1);
const numCols = 3; // Number of columns for each row
const numRows = Math.ceil(keys.length / numCols); // Calculate number of rows

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const index = row * numCols + col;
        if (index < keys.length) {
            const x = startX1 + col * colWidth1;
            const y =  (startY + (data.length + 1) * rowHeight + 20 ) +startY1 + row * rowHeight1; //startY1 + row * rowHeight1;
            doc.text(`${keys[index]}: ${values[index]}`, x, y, { width: colWidth1, align: 'left' });
        }
    }
}
doc.moveDown();
// const companyNameY = startY + (data.length + 1) * rowHeight + 20;
// const companyNameX = startX + colWidth; // Aligning with the table

// Finalize PDF
doc.end();

console.log('PDF generated successfully.');

