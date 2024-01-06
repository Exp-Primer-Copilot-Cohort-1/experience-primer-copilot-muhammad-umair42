function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
    var member = ["A", "B", "C", "D", "E"];
    var memberSkills = [];
    for (var i = 0; i < member.length; i++) {
        memberSkills.push({
            name: member[i],
            skills: skills
        });
    }
    return memberSkills;
}