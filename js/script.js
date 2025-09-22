/**
 * Search Input Controller
 * Handles user input formatting and state management.
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-input')

  // Return early if the element doesn't exist on the current page to prevent errors
  if (!searchInput) return

  /**
   * Capitalizes the first letter and lowercases the rest.
   * @param {Event} event - The input event object
   */
  const handleInputFormatting = event => {
    const input = event.target
    const value = input.value

    if (value.length === 0) return

    // Cache cursor position to prevent the cursor from jumping to the end on mobile devices
    const selectionStart = input.selectionStart
    const selectionEnd = input.selectionEnd

    // Apply sentence-case formatting
    input.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

    // Restore cursor position seamlessly
    input.setSelectionRange(selectionStart, selectionEnd)
  }

  // Use 'input' event for real-time tracking (handles typing, pasting, and deleting)
  searchInput.addEventListener('input', handleInputFormatting)
})
