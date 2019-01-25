function memberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'premium') {
      member = new PremiumMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }

}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '6$';
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '16$';
}

const PremiumMembership = function (name) {
  this.name = name;
  this.cost = '36$';
}

const members = [];

const factory = new memberFactory();

members.push(factory.createMember("John", "simple"));
members.push(factory.createMember("Jill", "premium"));
members.push(factory.createMember("Julliet", "standard"));

console.log(members);

members.forEach(function(member) {
  member.define();
}) 