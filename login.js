document.getElementById("btn").addEventListener("click", login);

async function login() {
  const pw = document.getElementById("pw").value;

  const payload = JSON.stringify({ password: pw });
  console.log("Sending JSON:", payload);

  const res = await fetch("https://summer-resonance-1f41.zammbb810.workers.dev/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload
  });

  let data;
  try {
    data = await res.json();
  } catch (e) {
    alert("Server error");
    return;
  }

  if (data.ok) {
    localStorage.setItem("session_token", data.token);
    window.location.href =
      "https://summer-resonance-1f41.zammbb810.workers.dev/page?token=" + data.token;
  } else {
    alert("Wrong password");
  }
}