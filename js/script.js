// Job Data
const jobs = [
  { id: 1, title: "Java Developer", company: "Infosys", location: "Pune" },
  { id: 2, title: "Frontend Developer", company: "TCS", location: "Mumbai" },
  { id: 3, title: "Backend Developer", company: "Wipro", location: "Bangalore" }
];

// Get Elements
const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");

// Display Jobs
function displayJobs(jobArray) {
  jobList.innerHTML = "";

  jobArray.forEach(job => {
    const card = `
      <div class="bg-white text-black p-5 rounded-xl shadow-lg hover:scale-105 transition">
        <h2 class="text-xl font-bold">${job.title}</h2>
        <p class="text-gray-600">${job.company}</p>
        <p class="text-gray-500">${job.location}</p>

        <button 
          onclick="viewJob(${job.id})"
          class="mt-3 bg-blue-900 text-white px-4 py-2 rounded">
          View Details
        </button>
      </div>
    `;

    jobList.innerHTML += card;
  });
}

// View Job
function viewJob(id) {
  localStorage.setItem("jobId", id);
  window.location.href = "job-details.html";
}

// Search Function
searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(value) ||
    job.company.toLowerCase().includes(value) ||
    job.location.toLowerCase().includes(value)
  );

  displayJobs(filteredJobs);
});

// Dark Mode
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

// Initial Load
displayJobs(jobs);
