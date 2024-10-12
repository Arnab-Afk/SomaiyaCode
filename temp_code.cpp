# Enter your code here#include <iostream>
#include <vector>
#include <unordered_map>

std::vector<int> twoSum(const std::vector<int>& nums, int target) {
    std::unordered_map<int, int> numMap; // To store the number and its index

    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i]; // Calculate the complement

        // Check if the complement exists in the map
        if (numMap.find(complement) != numMap.end()) {
            return {numMap[complement], i}; // Return the indices of the two numbers
        }

        // Store the number and its index in the map
        numMap[nums[i]] = i;
    }

    return {}; // Return an empty vector if no solution is found
}

int main() {
    std::vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    std::vector<int> result = twoSum(nums, target);

    if (!result.empty()) {
        std::cout << "Indices of the two numbers are: " << result[0] << " and " << result[1] << std::endl;
    } else {
        std::cout << "No two sum solution found." << std::endl;
    }

    return 0;
}
