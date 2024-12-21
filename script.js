let responses = [];

function saveResponse() {
    // Get form data
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);

    // Add the current form data to the responses array
    const response = {
        date: formData.get('date'),
        loadIn: formData.get('loadIn'),
        loadOut: formData.get('loadOut'),
        material: formData.get('material'),
        unit: formData.get('unit'),
        party: formData.get('party'),
        amount: formData.get('amount')
    };
    responses.push(response);

    alert('Response saved successfully!');
    form.reset();
}

function downloadExcel() {
    // Convert responses to a 2D array
    const headers = ["Date", "Load In", "Load Out", "Material", "Unit", "Party", "Amount"];
    const data = responses.map(r => [r.date, r.loadIn, r.loadOut, r.material, r.unit, r.party, r.amount]);

    // Add headers to the data
    const worksheetData = [headers, ...data];

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");

    // Export to Excel file
    XLSX.writeFile(workbook, "FormData.xlsx");
}
