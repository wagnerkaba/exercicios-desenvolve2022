# Normalize CSS vs CSS Reset

Below is the table of differences between **Resetting** and **Normalizing**: 

| **Resetting**                                                                                         | **Normalizing**                                                                                                            |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Resets all thehas styles that come with the browser’s user agent.                                     | Provides cross-browser consistency in the default styling of HTML elements which are provided by the browser’s User Agent. |
| Resetting have a big chain of selectors, and they make a lot of unnecessary overrides in the styling. | Not many big chains of CSS Selectors to be seen while normalizing as it utilizes User Agent’s styles.                      |
| It is hard to debug as it is nearly impossible to identify bugs.                                      | Debugging is easy while normalizing                                                                                        |
| Resetting is Non-Modular (no section breaking in styles)                                              | Normalizing is Modular (styling is divided into sections for ease)                                                         |

Fonte: [Difference between “resetting” and “normalizing” in CSS - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-resetting-and-normalizing-in-css/)


