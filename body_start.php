<body>
  <div id="container">
    <h1><a href="/">Erin<em>Rademacher</em></a></h1>
    <script type="text/javascript">
        var portfolio = <?= $portfolio ? 'true' : 'false' ?>;
    </script>
    <div id="navigation">
      <ul>
        <li id="portfolio" class="<?= $portfolio ? 'selected' : '' ?>">
          <a href="/portfolio/isolation.php">Portfolio</a>
          <ul id="portfolio_tier2" style="display: <?= $portfolio ? 'block' : 'none' ?>;">
            <li id="isolation" class="<?= $page == 'Isolation' ? 'selected' : '' ?>">
              <a href="/portfolio/isolation.php">Isolation</a>
            </li>
            <li id="romanticism" class="<?= $page == 'Classical' ? 'selected' : '' ?>">
              <a href="/portfolio/romanticism.php">Romanticism</a>
            </li>
            <li id="beauty" class="<?= $page == 'Beauty' ? 'selected' : '' ?>">
              <a href="/portfolio/beautiful_distortion.php">A Beautiful Distortion</a>
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
