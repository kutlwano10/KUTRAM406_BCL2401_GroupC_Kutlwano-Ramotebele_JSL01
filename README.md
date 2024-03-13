## Syntax-Engine Interaction


# Objective:

This is a simple web application that validates user input to ensure it matches a specific format. It was created as a project to improve HTML, CSS, and JavaScript skills.

# Challenges:

I encountered challenges while trying to determine which method to use. Initially, I attempted to check the input field by verifying if there is a substring of 4 characters, which must strictly begin with 'pet_'. Then, I modified it to return false if the condition wasn't met. I also included a boolean variable for brevity.

Next, I attempted to check if the year consisted of 4 characters, all of which were digits. Although I had already created a variable for the year, I encountered confusion along the way and eventually had to abandon it, even though the logic seemed somewhat correct.

# Solution:

To address these challenges, I needed to delve deeper into regular expressions. After extensive research, I discovered the 'test' method, which I utilized in my code to ascertain if the starting characters were 'pet_', followed by 4 digits and a name. I encapsulated this logic within a function that included return statements.

Subsequently, within the button function provided, I retrieved the user's input from the browser using the 'id'. This allowed for the commencement of testing upon clicking the button and ensured the correct output was returned. To display the result, I obtained the 'id' of the result paragraph, where I stored the response obtained from my input function, thus allowing it to appear on the browser.

# Improvements:

I will look more into other ways to solve this problem ,I also made a Project to test website passwords for its strength just to try to improve my understanding more .On that code i use the if else statement since i had 3 statements to test for password strength.