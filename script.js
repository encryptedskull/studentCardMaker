let pic = document.querySelector(".image");
let in_file = document.getElementById("input-file");

let res = (in_file.onchange = function () {
  pic.src = URL.createObjectURL(in_file.files[0]);
  document.querySelector(".profile").src = URL.createObjectURL(
    in_file.files[0]
  );
});

document.querySelector(".submit").addEventListener("click", function () {
  let naam = document.querySelector(".s_name").value;
  let walid = document.querySelector(".f_name").value;
  let fareeq = document.querySelector(".roll_no").value;
  let sanad = document.querySelector(".program").value;
  let dept = document.querySelector(".shuba").value;
  let start = document.querySelector(".shuru_date").value;
  let end = document.querySelector(".khatam_date").value;

  alert("Data Submitted Successfully");
  //   console.log(naam, walid, fareeq);

  document.querySelector(".name").textContent = naam;
  document.querySelector(".father").textContent = ` S/O ${walid}`;
  document.querySelector(".number").textContent = fareeq;
  document.querySelector(".degree").textContent = sanad;
  document.querySelector(".department").textContent = dept;
  document.querySelector(".issue_date").textContent = start;
  document.querySelector(".expiry_date").textContent = end;
});

document.querySelector(".getcard").addEventListener("click", function () {
  document.querySelector(".uog").classList.remove("hidden");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".uog").classList.add("hidden");
});
