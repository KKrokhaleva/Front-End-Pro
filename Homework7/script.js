
let students = studentsMock.getStudentList(10);

function averageMark(student) {
	let sum = 0;
	let count = student.marks.length;
	for (i = 0; i < count; i++) {
		sum += student.marks[i];
	}
	student.averageMark = sum / count;
}

function medianMark(student) {
	student.marks.sort((a, b) => a - b);
	let arrRes = _.uniq(student.marks);
	let maxCount = 0, index = 0;
	arrRes.forEach(function (item) {
		if ((student.marks.indexOf(item) !== student.marks.lastIndexOf(item))) {
			if (maxCount < (student.marks.lastIndexOf(item) - student.marks.indexOf(item))) {
				maxCount = student.marks.lastIndexOf(item) - student.marks.indexOf(item);
				index = student.marks.lastIndexOf(item);
			}
		}
	});
	student.medianeMark = student.marks[index];
}

function newStudent(students){
students.push({name:'',specialty:'',marks:[]});
}
newStudent(students);

students.forEach(student => {
	averageMark(student);
	medianMark(student);
});
console.table(students);

function forExclude(students) {
	return students.filter(student => student.averageMark < 50);
}
console.table(forExclude(students));

function sortByAverage(students){
	students.sort((a,b)=>b.averageMark-a.averageMark);
	let res = [];
	students.forEach(function(item){
		res.push([item.name,item.averageMark])
		})	
	console.table(res);
	}
	
sortByAverage(students);

