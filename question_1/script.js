"use strict";

const downloadBtn = document.querySelector("#download-button");
var nonMemberFirstDLTime
var memberFirstDLTime
var nonMemberDlCounter = 0;
var memberDlCounter = 0;

const downloadFile = () => {
    const membership = document.querySelector("input[name='membership']:checked").value;
    const currentTime = new Date();
    if (membership === "member") {
        memberFirstDLTime = memberDlCounter === 0 ? currentTime : memberFirstDLTime; //ensure that the memberFirstDLTime is always holding date time of first download
        if (((currentTime - memberFirstDLTime) / 1000) > 5) {
            memberDlCounter = 0;
            memberFirstDLTime = currentTime;
        }
        memberDlCounter++;
        if (memberDlCounter <= 2 && ((currentTime - memberFirstDLTime) / 1000) <= 5) {
            console.log(`Last Downloaded Time: ${currentTime}`)
            console.log(`Download Attempt: ${memberDlCounter}`)
            alert("Your Download is Starting");
        } else {
            alert("Too Many Downloads! Please try again after a short while.");
        }
    } else if (membership === "nonMember") {
        nonMemberFirstDLTime = nonMemberDlCounter === 0 ? currentTime : nonMemberFirstDLTime; //ensure that the nonMemberFirstDLTime is always holding date time of first download
        if (((currentTime - nonMemberFirstDLTime) / 1000) > 5) {
            nonMemberDlCounter = 0;
            nonMemberFirstDLTime = currentTime;
        }
        nonMemberDlCounter++;
        if (nonMemberDlCounter <= 1 && ((currentTime - nonMemberFirstDLTime) / 1000) <= 5) {
            console.log(`Last Downloaded Time: ${currentTime}`)
            console.log(`Download Attempt: ${nonMemberDlCounter}`)
            alert("Your Download is Starting");
        } else {
            alert("Too Many Downloads! Please try again after a short while.");
        }
    } else {
        alert("Select member or non-member before downloading.")
    }
};

downloadBtn.addEventListener("click", downloadFile);