# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_even_outcome(number)
    if number.even?
        puts "#{number} is even."      
    elsif number.odd?
        puts "#{number} is odd."
    end
end

puts odd_even_outcome num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
#create a method called palindrome with a parameter of string 


#use the ruby built in method .delete to remove vowels from a string
album1 = 'Rubber Soul' 
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_remover(string)
    string.delete "aeiou"
end

puts vowel_remover album1



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

#create a method called palindrome with a parameter of string 
#use the ruby built in method reverse to see if the string equals itself if reversed and add .downcase to account for capital letters



palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(string)
    if string.downcase == string.downcase.reverse
        puts "#{string} is a palindrome."      
    else 
        puts "#{string} is not a palindrome."
    end
end

puts palindrome palindrome_tester3
