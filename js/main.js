// ======== ТЕМА ========
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeToggle.textContent = currentTheme === "dark" ? "🌙" : "🌞";

  themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "🌙" : "🌞";
  });
});

// ======== МУЗЫКА (через iframe) ========
document.querySelectorAll("#track-menu button").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.dataset.src;
    const frame = document.getElementById("music-frame");
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: "setTrack", src }, "*");
    }
  });
});

// ======== КЛИКЕР ЛАЙКОВ ========
document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach(button => {
    const itemId = button.dataset.id;
    const countSpan = button.querySelector("span");

    const savedCount = localStorage.getItem(`likes-${itemId}`);
    const initialCount = savedCount ? parseInt(savedCount) : 0;
    countSpan.textContent = initialCount;
    updateGradient(button, initialCount);

    button.addEventListener("click", () => {
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;
      localStorage.setItem(`likes-${itemId}`, count);
      updateGradient(button, count);
    });
  });
});

function updateGradient(button, count) {
  let color;

  if (count < 3) {
    color = "linear-gradient(to right, #ffdde1, #ee9ca7)";
  } else if (count < 6) {
    color = "linear-gradient(to right, #ffb6b9, #fa709a)";
  } else if (count < 10) {
    color = "linear-gradient(to right, #ff6a6a, #d71e28)";
  } else {
    color = "linear-gradient(to right, #8b0000, #4b0000)";
  }

  button.style.background = color;
}

// ======== ОБРАТНАЯ СВЯЗЬ ========
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    if (name.length < 2) {
      alert("Пожалуйста, введите имя (минимум 2 символа).");
      return;
    }

    if (!email.includes("@") || email.length < 5) {
      alert("Пожалуйста, введите корректный email.");
      return;
    }

    if (message.length < 10) {
      alert("Сообщение должно содержать минимум 10 символов.");
      return;
    }

    alert("Спасибо! Ваше сообщение отправлено.");
    contactForm.reset();
  });
}

// ======== ВЫПАДАЮЩЕЕ МЕНЮ ТРЕКОВ ========
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("music-toggle");
  const trackMenu = document.getElementById("track-menu");

  if (toggleBtn && trackMenu) {
    toggleBtn.addEventListener("click", () => {
      trackMenu.classList.toggle("hidden");
    });

    // Закрытие меню при клике вне
    document.addEventListener("click", (e) => {
      if (!toggleBtn.contains(e.target) && !trackMenu.contains(e.target)) {
        trackMenu.classList.add("hidden");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector(".main-nav ul");

    if (burger && navMenu) {
        burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Закрытие меню при клике вне
    document.addEventListener("click", (e) => {
        if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove("active");
        }
    });
    }

});