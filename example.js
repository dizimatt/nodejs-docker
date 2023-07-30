function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 35,
};
var isJustineAnAdult = isAdult(justine);
console.log("justine is and adult: %o", isJustineAnAdult);
