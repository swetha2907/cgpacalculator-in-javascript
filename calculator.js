function find(grade, unit) {
    if (grade === "O") {
      return 10 * unit;
    } else if (grade === "A+") {
      return 9 * unit;
    } else if (grade === "A") {
      return 8 * unit;
    } else if (grade === "B+") {
      return 7 * unit;
    } else if (grade === "B") {
      return 6 * unit;
    } else if (grade === "F") {
      return 0 * unit;
    }
  }
  
  let counter = 1;
  
  function addCourse() {
    let add = document.createElement("form");
    add.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
          <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
          <select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="0">F</option>
      </select>  
    </form>
    `;
    add.innerHTML = course_name;
    document.getElementById("mass").appendChild(add);
    counter++;
  }
  
  function removeCourse() {
    let rem = document.querySelector("form.add_new");
    rem.remove();
  }
  
  const reports = [];
  
  function calculate() {
    const CGPA = document.getElementById("cgpa-calc");
    const SELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    const courseReport = {};
  
    const lGrade = [];
    const lUnit = [];
    let totalUnits = 0;
  
    SELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const selectedGrade = GRADES[selectedIndex];
      const Value = selectedGrade.text.toUpperCase();
      lGrade.push(Value);
    });
    console.log(lGrade);
  
    UNIT.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue;
      lUnit.push(unitValue);
    });
    console.log(lUnit);
  
    let total = 0;
  
    for (let i = 0; i < lUnit.length; i++) {
      total += find(lGrade[i], lUnit[i]);
    }
    const gpa = total / totalUnits;
    
    if (gpa >= 0){
      CGPA.textContent = "Your CGPA is " + gpa.toFixed(2);   
    } else {
      CGPA.textContent = "Please enter your correct grade and credit units";    
    }
    
  }
  