
      // Function to generate a random goal between 1 and 17
      function getRandomGoal() {
          return Math.floor(Math.random() * 17) + 1; // Assuming there are 17 goals
      }

      // Event listener for the button click
      document.getElementById('randomize-button').addEventListener('click', function() {
          const randomGoal = getRandomGoal();
          const goalElement = document.getElementById('top_goal');

          // Update the goal attribute
          goalElement.setAttribute('goal', randomGoal);

          // Optional: Log the new goal value to the console
          console.log('New Goal:', randomGoal);
      });