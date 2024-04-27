function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
  
    const resumeTemplate = `
      <h2>${fullName}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    document.getElementById("resumeOutput").innerHTML = resumeTemplate;
  }
  