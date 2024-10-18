def two_sum(nums, target):
    num_map = {}  # Create a dictionary to store numbers and their indices

    for i, num in enumerate(nums):
        complement = target - num  # Calculate the complement

        if complement in num_map:  # Check if the complement exists in the dictionary
            return [num_map[complement], i]  # Return the indices of the two numbers

        num_map[num] = i  # Store the current number and its index in the dictionary

    return []  # Return an empty list if no solution is found

# Example usage:
if __name__ == "__main__":
    numbers = [2, 7, 11, 15]
    target = 9
    result = two_sum(numbers, target)

    print(f'Indices of the two numbers that add up to {target} are: {result}') 
    # Output: Indices of the two numbers that add up to 9 are: [0, 1]
