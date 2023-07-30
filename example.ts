type User = {
    name: string;
    age: number;
};

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const justine: User = {
    name: 'Justine',
    age: 35,
};

const isJustineAnAdult: boolean = isAdult(justine);
console.log("justine is and adult: %o", isJustineAnAdult);