# frozen_string_literal: true

def game
  compScore = 0
  personScore = 0
  until compScore == 3 || personScore == 3
    print 'Choose Rock, Paper or Scissors'
    person = gets.chomp.downcase
    comp = %w[rock paper scissors].sample
    # p wins
    if (person == 'rock' && comp == 'paper') || (person == 'scissors' && comp == 'paper') || (person == 'paper' && comp == 'rock')
      p 'You win'
      personScore += 1
    # tie
    elsif (person == 'rock' && comp == 'rock') || (person == 'paper' && comp == 'paper') || (person == 'scissors' && comp == 'scissors')
      p 'Tie - no points'
    # comp wins
    else compScore += 1
         p 'Whomp, whomp, you lose'
   end
    # Results
    p "Human Score: #{personScore}"
    p "Computer Score: #{compScore}"
    # Resulted Choices
    p "Human chose: #{person}"
    p "Computer chose: #{comp}"
end
  # Tell who wins
  p personScore > compScore ? 'YOU WON' : 'YOU LOSE'
end
