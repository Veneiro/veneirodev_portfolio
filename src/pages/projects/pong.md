---
layout: '@/templates/BasePost.astro'
title: Pong P5JS
description: My Pong interpretation on P5JS
pubDate: 2022-01-25T00:00:00Z
imgSrc: '/assets/images/pongLogo.png'
imgAlt: 'Pong Logo'
---
<main>
  <h1>PongP5JS</h1>

  ---

  <h2>Link</h2>
  Gihub <a href="https://github.com/Veneiro/PongP5JS">link</a> for you to try it

---

  <h2>Basic Controls</h2>
  <section>
      <p>To play the game, you will need to use the keyboard arrows. If you press the left arrow, the paddle will move to the left, and if you press the right arrow, it will move to the right.</p>
      <p>
    The game area is marked in black; this area will expand as the game progresses. This point will be explained in the section "Evolution and Increase in Difficulty."
      </p>
  </section>
  <h2>Main Idea of the Game</h2>
  <section>The game will try to resemble the game we could play with a racket. The ball will bounce on the paddle and, due to its own gravity, will fall back down. The player must try to achieve the highest number of "touches" possible without the ball falling off the bottom of the screen.<section>
    <h2>Evolution and Increase in Difficulty</h2>
    <section>
        <p>Unlike what we have in real life, the game will not remain static until the player fails due to fatigue or having lasted a long time. Throughout a game, different modifiers will be applied so that the player has to remain constantly alert and learn as their score increases.</p>
        <ul>
      <li>
          Increased Bounce: Every 5 points obtained, the bounce of the ball on the paddle will increase. We can imagine this as the paddle becoming more elastic. This will cause the ball to gradually reach higher with the same "touch."
      </li>
      <li>
          Increased Bounce Angle: Every 5 points obtained by the player, the ball will gradually bounce more inconsistently and at wider angles, causing the player to be alert in case the ball bounces more aggressively.
      </li>
      <li>
          Increased Sensitivity: Every 5 points, the sensitivity when moving the paddle will increase, making it more difficult for the player to leave the paddle in the desired position.
      </li>
      <li>
          Increased Space: Every 50 points, the horizontal area of the game zone will increase, causing the ball to bounce further to the sides. This will not happen infinitely; it will be limited by the size of the screen being played on.
      </li>
      <li>
          Bounce on the Game Area Limits: At first glance, it seems like a simple wall or ceiling, but as the ball's bounce force increases, a bad bounce can result in the loss of a life.
      </li>
      <li>
          Paddle Reduction: While some things increase, others decrease. After achieving 50 points, the width of your paddle will reduce.
      </li>
        </ul>
    </section>
    <h2>Sound</h2>
    <section>
        <article>
      <p>All the sound resources of the game have been manually generated using the Sonic Pi tool seen in class.
      <p>
        </article>
        <article>
      <h3>Existing Sounds</h3>
      <ul>
          <li>
        Paddle bounce sound
          </li>
          <li>
        Difficulty increase sound
          </li>
          <li>
        Life loss sound
          </li>
          <li>
        All menu and game music
          </li>
      </ul>
        </article>
    </section>
    <section>
        <h2>Libraries</h2>
        <p>
        <ul>
      <li>
          Matter.js - 0.19.0
      </li>
      <li>
          p5sound - 1.7.0
      </li>
        </ul>
        </p>
    </section>
    </main>
