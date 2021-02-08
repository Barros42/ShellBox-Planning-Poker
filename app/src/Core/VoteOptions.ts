type OptionList = "fibonnaci"

const OptionListObject = {
  FIBONNACI: "fibonnaci",
}

const PlanninPokerOptions = {
  FIBONNACI: ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'],
}

export default class VoteOptions {
  static getVoteOptions(voteOptionSelected: OptionList): string[] {
    switch (voteOptionSelected) {
      case OptionListObject.FIBONNACI:
        return PlanninPokerOptions.FIBONNACI
      default:
        return PlanninPokerOptions.FIBONNACI
    }
  }
}