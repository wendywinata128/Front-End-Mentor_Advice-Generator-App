const onFetchData = (e) => {
  if (e != null) e.target.disabled = true;
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(({ slip: advice }) => {
      if (e != null) e.target.disabled = false;
      document.querySelector(
        ".container h2"
      ).innerHTML = `ADVICE #${advice.id}`;
      document.querySelector(".container p").innerHTML = `${advice.advice}`;
    });
};

onFetchData();
