import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch invoices from the backend
export const fetchInvoices = createAsyncThunk("invoices/fetchInvoices", async () => {
  try {
    const response = await fetch("http://localhost:5000/api/invoices"); // Correct URL to fetch invoices
    if (!response.ok) {
      throw new Error("Failed to fetch invoices");
    }
    const data = await response.json();
    return data; // Return the invoices data
  } catch (error) {
    throw error; // Propagate the error
  }
});

// Invoice slice
const invoiceSlice = createSlice({
  name: "invoices",
  initialState: {
    list: [], // Array to store invoices
    status: "idle", // Status of the fetch operation (idle, loading, succeeded, failed)
    error: null, // Store error message (if any)
  },
  reducers: {}, // Add any synchronous reducers here if needed
  extraReducers: (builder) => {
    builder
      // When fetch is pending, set status to loading
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
      })
      // When fetch is fulfilled, set status to succeeded and store the fetched invoices
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload; // Populate the list with fetched invoices
        state.error = null; // Reset error message if fetch is successful
      })
      // When fetch fails, set status to failed and store the error message
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Store error message
      });
  },
});

export default invoiceSlice.reducer;
