// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

const users = require("./data");

const { 
    getUsers,
    getUser,

} = require ("../userFunctions.js")

// Make a test to verify if the method getUser(id) works correctly
describe("getUsers", () =>{
    it("it should return the user with id 1", () => {
        const user = users[1];
        expect(getUserById(users, 1)).toEqual(user);
    });

    it("it should fail to return the user", () => {
        const user = users[2];
        expect(getUserById(users, 3)).toEqual(user);
    });
});

describe("getUser", () =>{
    it("it should return the username", () => {
        const user = getUserByUsername ('piderman');
        expect(user).toHaveProperty("username"), 'piderman';
        expect(user).toHaveProperty("id", 2);
    });

    it("it should fail to return the username", () => {
        const user = getUserByUsername ('unsurejudy');;
        expect(user).toBeUndefined;
    });
});


module.exports = {getUser, getUsers};
// Verify any data of the resulting object you want

// READ documentation
