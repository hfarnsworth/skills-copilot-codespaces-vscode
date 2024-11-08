function skillsMember() {
  // 1. Get the member id from the URL
  var memberId = window.location.href.split('/')[4];
  // 2. Get the member skills
  var memberSkills = getMemberSkills(memberId);
  // 3. Display the member skills
  displayMemberSkills(memberSkills);
}