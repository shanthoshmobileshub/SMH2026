export const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbznDdZ59fSqQecC1QZQauoo2Xntebc6gJrhygNOLlb5XSXjPMG6XYTky07adIUSATYuxg/exec"
export async function saveCheckoutDraft(draft) {
  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "draft",
        data: draft
      })
    });

    return await res.json();
  } catch (err) {
    console.error("Draft save ERROR:", err);
    return { success: false, error: err.message };
  }
}

export async function submitOrder(payload) {
  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "order",
        data: payload
      })
    });

    return await res.json();
  } catch (err) {
    console.error("Submit order ERROR:", err);
    return { success: false, error: err.message };
  }
}
