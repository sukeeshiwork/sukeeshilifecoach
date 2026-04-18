const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

export const saveToSheet = async (sheetName, data) => {
  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify({ 
        sheetName, 
        action: 'save', 
        ...data 
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Sheet save error:', err);
    return { success: false };
  }
};

export const updatePaymentStatus = async (sheetName, rowIndex, paymentId) => {
  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify({
        sheetName,
        action: 'updatePayment',
        rowIndex,
        paymentId
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Sheet update error:', err);
    return { success: false };
  }
};