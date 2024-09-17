class Vector {
    constructor(i, j, k) {
        this.i = i;
        this.j = j;
        this.k = k;
    }
    toString() {
        if (this.j < 0 && this.k < 0) {
            return (`${this.i}i ${this.j}j ${this.k}k`);
        }
        else if (this.j < 0) {
            return (`${this.i}i ${this.j}j + ${this.k}k`);
        }
        else if (this.k < 0) {
            return (`${this.i}i + ${this.j}j ${this.k}k`);
        }
        else {
            return (`${this.i}i + ${this.j}j + ${this.k}k`);
        }
    }
}

function vectorSum(Va, Vb) {
    return new Vector(Va.i + Vb.i, Va.j + Vb.j, Va.k + Vb.k);
}
function vectorDiff(Va, Vb) {
    return new Vector(Va.i - Vb.i, Va.j - Vb.j, Va.k - Vb.k);
}
function DotProduct(Va, Vb) {
    return (Va.i * Vb.i) + (Va.j * Vb.j) + (Va.k * Vb.k);
}
function CrossProduct(Va, Vb) {
    return new Vector((Va.j * Vb.k) - (Va.k * Vb.j), (Va.k * Vb.i) - (Va.i * Vb.k), (Va.i * Vb.j) - (Va.j * Vb.i));
}
function Magnitude(Va) {
    return (((((Va.i) ** 2) + ((Va.j) ** 2)) + ((Va.k) ** 2)) ** (1 / 2)).toFixed(2);
}
function angle(Va, Vb) {
    const cos = ((DotProduct(Va, Vb))/(Magnitude(Va)*Magnitude(Vb))).toFixed(2);
    const a = Math.acos(cos);
    return `${(a*(180/Math.PI)).toFixed(2)}°`;
}

const v1 = new Vector(-2, 3, 1);
const v2 = new Vector(1, 2, -4);



const enterBtnFirst = document.getElementById('first-enter');
const enterBtnSecond = document.getElementById('second-enter');
const addBtn = document.getElementById('add');
const diffBtn = document.getElementById('diff');
const dotBtn = document.getElementById('dot');
const crossBtn = document.getElementById('cross');
const Ma1 = document.getElementById('magnitude-1');
const Ma2 = document.getElementById('magnitude-2');
const angleBtn = document.getElementById('angle');


addBtn.addEventListener('click', () => {
    var first_i = Number(document.getElementById('first-i-vector').value);
    var first_j = Number(document.getElementById('first-j-vector').value);
    var first_k = Number(document.getElementById('first-k-vector').value);
    var second_i = Number(document.getElementById('second-i-vector').value);
    var second_j = Number(document.getElementById('second-j-vector').value);
    var second_k = Number(document.getElementById('second-k-vector').value);

    const vector1 = new Vector(first_i, first_j, first_k);
    const vector2 = new Vector(second_i, second_j, second_k);

    const add = vectorSum(vector1, vector2)
    document.getElementById('answer').innerHTML = add.toString();
})


diffBtn.addEventListener('click', () => {
    var first_i = Number(document.getElementById('first-i-vector').value);
    var first_j = Number(document.getElementById('first-j-vector').value);
    var first_k = Number(document.getElementById('first-k-vector').value);
    var second_i = Number(document.getElementById('second-i-vector').value);
    var second_j = Number(document.getElementById('second-j-vector').value);
    var second_k = Number(document.getElementById('second-k-vector').value);

    const vector1 = new Vector(first_i, first_j, first_k);
    const vector2 = new Vector(second_i, second_j, second_k);

    const diff = vectorDiff(vector1, vector2)
    document.getElementById('answer').innerHTML = diff.toString();
})


dotBtn.addEventListener('click', () => {
    var first_i = Number(document.getElementById('first-i-vector').value);
    var first_j = Number(document.getElementById('first-j-vector').value);
    var first_k = Number(document.getElementById('first-k-vector').value);
    var second_i = Number(document.getElementById('second-i-vector').value);
    var second_j = Number(document.getElementById('second-j-vector').value);
    var second_k = Number(document.getElementById('second-k-vector').value);

    const vector1 = new Vector(first_i, first_j, first_k);
    const vector2 = new Vector(second_i, second_j, second_k);

    const dot = DotProduct(vector1, vector2)
    document.getElementById('answer').innerHTML = dot;
})


crossBtn.addEventListener('click', () => {
    var first_i = Number(document.getElementById('first-i-vector').value);
    var first_j = Number(document.getElementById('first-j-vector').value);
    var first_k = Number(document.getElementById('first-k-vector').value);
    var second_i = Number(document.getElementById('second-i-vector').value);
    var second_j = Number(document.getElementById('second-j-vector').value);
    var second_k = Number(document.getElementById('second-k-vector').value);

    const vector1 = new Vector(first_i, first_j, first_k);
    const vector2 = new Vector(second_i, second_j, second_k);

    const cross = CrossProduct(vector1, vector2)
    document.getElementById('answer').innerHTML = cross.toString();
})

Ma1.addEventListener('click', () => {
    var first_i = Number(document.getElementById('first-i-vector').value);
    var first_j = Number(document.getElementById('first-j-vector').value);
    var first_k = Number(document.getElementById('first-k-vector').value);

    const vector = new Vector(first_i, first_j, first_k);

    const mag = Magnitude(vector);
    document.getElementById('answer').innerHTML = mag.toString();
})

Ma2.addEventListener('click', () => {
    var second_i = Number(document.getElementById('second-i-vector').value);
    var second_j = Number(document.getElementById('second-j-vector').value);
    var second_k = Number(document.getElementById('second-k-vector').value);

    const vector = new Vector(second_i, second_j, second_k);

    const mag = Magnitude(vector);
    document.getElementById('answer').innerHTML = mag.toString();
})

angleBtn.addEventListener('click', () => {
    var first_i = Number(document.getElementById('first-i-vector').value);
    var first_j = Number(document.getElementById('first-j-vector').value);
    var first_k = Number(document.getElementById('first-k-vector').value);
    var second_i = Number(document.getElementById('second-i-vector').value);
    var second_j = Number(document.getElementById('second-j-vector').value);
    var second_k = Number(document.getElementById('second-k-vector').value);

    const vector1 = new Vector(first_i, first_j, first_k);
    const vector2 = new Vector(second_i, second_j, second_k);

    const ang = angle(vector1, vector2)
    document.getElementById('answer').innerHTML = ang;
})

const d = new Date();
let year = d.getFullYear();
const author = "Amir Hasan"

document.getElementById('made-by').innerHTML = `©Copyright ${year}. Made by ${author}`
