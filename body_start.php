<body>
  <div id="container">
    <h1 id="logo"><a href="/">Erin<em>Rademacher</em></a></h1>
    <script>
        var portfolio = <?= $portfolio ? 'true' : 'false' ?>;
    </script>
    <div id="navigation">
      <ul>
        <li id="portfolio" class="<?= $portfolio ? 'selected' : '' ?>">
          <a href="/portfolio/another.php">Portfolio</a>
          <ul id="portfolio_tier2" style="display: <?= $portfolio ? 'block' : 'none' ?>;">
            <li id="another" class="<?= $page == 'Another' ? 'selected' : '' ?>">
              <a href="/portfolio/another.php">Another Me</a>
            </li>
            <li id="thumbelina" class="<?= $page == 'Thumbelina' ? 'selected' : '' ?>">
              <a href="/portfolio/thumbelina.php">Thumbelina</a>
            </li>
            <li id="isolation" class="<?= $page == 'Isolation' ? 'selected' : '' ?>">
              <a href="/portfolio/isolation.php">Isolation</a>
            </li>
            <li id="weather" class="<?= $page == 'Weather' ? 'selected' : '' ?>">
              <a href="/portfolio/weather.php">Strange Weather</a>
            </li>
          </ul>
        </li>
        <li id="about" class="<?= $page == 'about' ? 'selected' : '' ?>">
          <a href="/about.php">About</a>
        </li>
        <li id="contact" class="<?= $page == 'contact' ? 'selected' : '' ?>">
          <a href="/contact.php">Contact</a>
        </li>
      </ul>
    </div>
    <div id="content" class="<?= $portfolio ? 'portfolio' : '' ?>">
