---
layout: '@/templates/BasePost.astro'
title: Fortress Extraction
description: My Unreal Engine 4 Game
pubDate: 2022-01-25T00:00:00Z
imgSrc: '/assets/images/Screenshot_1095.png'
imgAlt: 'Image post 7'
order: 1
---
## Project Link

Check the project [here](https://unioviedo-my.sharepoint.com/:w:/g/personal/uo277172_uniovi_es/EZ7Af5HV_x5AnQ5IDbuuqPIBcipzJg3KP0zsCHyot6ocrQ?e=5Wftgb)

In the future, it will be uploaded to GitHub like the rest of my projects, but I still need to solve some issues that have arisen when transferring it from Unreal Engine 4 to Unreal Engine 5.

## Basic Summary: 
As a base for the game, inspiration has been taken from two types of games: Hero Shooters (competitive team-based shooters with characters that have various abilities) and the classic Tower Defense (a game where the player must defend their base from attackers coming in waves). In the end, what we have with this combination is a tower defense game where the player controls a character in the first person and tries to defend the base from waves of diverse enemies.

The player must improve their character's stats to face the waves of diverse enemies and defend the castle's core above all else.

## What's Available in This Version of the Game?

This presented version contains the features to play a fun game, although it has only been tested by one person, so balance changes may be needed to improve the player experience.

### Playable Characters
- Magath: He is the tankiest character, with a higher amount of health and armor. He has two abilities:

  - Long Jump: Magath will perform a large jump in the direction he is looking. The jump distance can be increased by performing a normal jump before activating the ability and looking up, as the impulse is produced in the direction the camera is pointing. This ability has a cooldown of 4 seconds that starts upon landing.

  - Energy Shield: Magath summons a shield around him that will absorb all bullets that hit it for 12 seconds. This ability has a cooldown of 15 seconds that starts right after the shield's duration ends.

<img src="/assets/images/Screenshot_1096.png">

- Ravth: She is a character more focused on support, with lower health and shield. She has two abilities:

  - Healing Area: Ravth will summon a healing area that will heal her and any allies within this area.

  - Divine Light: Upon hitting an enemy, it will inflict burn damage for 6 seconds (In a multiplayer game, if it hits an ally, it will heal them for those 6 seconds, although since multiplayer is not yet implemented, this functionality is currently unavailable).

<img src="/assets/images/Screenshot_1097.png">

The game will start with a 3-minute grace period, which can be skipped quickly by pressing P if desired. After this grace period, the wave will begin, and enemies will start coming. You will have to overcome 10 waves with different types and quantities of enemies. Each time an enemy reaches the player's core, it will reduce the core's health by an amount depending on the type of enemy.

### Types of Enemies

- **Scout**: This will be a fast enemy with high damage but low health. Upon reaching the core, it will reduce the core's health by 500.

<img src="/assets/images/Screenshot_1098.png">

- **Heavy**: This will be a slower enemy with more health and a high rate of fire but lower damage. Upon reaching the core, it will reduce the core's health by 1000.

<img src="/assets/images/Screenshot_1099.png">

- **Big Boy**: This enemy will have a massive amount of health, be quite slow, and will not attack the player. However, it must be taken into account because if it reaches the core, it will destroy it completely after 5 seconds.

<img src="/assets/images/Screenshot_1100.png">

### Shop
Here you can improve your character's stats for the game. The money needed to do this will be obtained by defeating enemies. Each enemy will drop a random amount of money upon death that the player can collect. Depending on the type of enemy, it will tend to drop more or less money, with more difficult enemies dropping more.

The upgrades available in the shop at the moment are as follows:

<img src="/assets/images/Screenshot_1101.png">

We have a damage upgrade, a speed upgrade, a health upgrade, and an armor upgrade. The number to the right of each one is the upgrade cost, which will increase as we improve this stat, so it won't cost the same to upgrade it the first time as it will the second or third time. Each character will have different prices in the shop according to their base stats. For example, for Ravth, having less health and armor, the upgrade for both is a bit cheaper than for Magath.

## Other Features

- The game has a fully functional menu with settings for graphics, screen, and audio that will be saved when applied and will be present the next time the game is started.

- The game has a complete graphical interface for the player that indicates all the relevant information to keep in mind during the game (Health, armor, money, wave...).

- The player has a pause menu by pressing Escape, which will pause the game and allow them to return to the main menu or close the game.

## Developer Comments

I apologize in advance for any bugs or errors that may be present and prevent the game from functioning correctly. It is difficult to test the game properly with only one person, and there may be some issues that I have missed during testing.

If the screen appears black when starting the project, you will need to go to ThirdPersonBP/Blueprints/Maps/MainMenu and open the MainMenuMap to start the game. This is a bug I have encountered a few times, and I believe it is an issue with Unreal.

All the code created by me is inside the ThirdPersonBP folder. All the logical and graphical parts of the game can be found there, organized by folders.

Any comments, suggestions, or help you have about the game will be very interesting to me, as my intention is to continue polishing it, add multiplayer to this tower defense mode and another mode I have already thought of, and upload it to a site like itch.io or also try it with friends. So all the feedback you can give me about the game will be very helpful.

## Unreal Engine 4 Bug

**To fix it**, you need to create a shortcut to Unreal from which you will always enter, and in the shortcut properties in the target, after the quotes, you need to put -dx12. This will open Unreal with DirectX 12, and at least this solution has made the flickering and constant black screen bugs disappear completely for me. Since I did this, it hasn't happened again. You will need to always open Unreal from this shortcut, and the bug will not occur.