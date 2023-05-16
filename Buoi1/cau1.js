let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]


function findAge(age) {
    let findOut;
    for (const sd of student) {
        if (sd.age == age) {
            findOut = sd;
        }
    }
    if (findOut == undefined) {
        console.log("Khong tim thay");
    }
    else {
        console.log(findOut)
    }
}

findAge(16)

function findCourse(course) {
    let findOut = [];
    for (const sd of student) {
        for (const c of sd.course) {
            if (c == course) {
                console.log("cau 1/b");
                console.log(sd);
            }
        }
    }
    if (findOut == undefined) {
        console.log("Khong tim thay");
    }
    else {
        console.log(findOut)
    }
}

findCourse('mindX 01')