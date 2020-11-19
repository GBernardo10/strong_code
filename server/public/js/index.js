function getData() {
  fetch("/api").then((res) =>
    res
      .json()
      .then(
        (res_json) => (document.getElementById("msg").innerHTML = res_json.msg)
      )
  );
}

window.onload = getData;
