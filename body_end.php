    </div>
    <div id="copyright">&copy; <?= date("Y"); ?> Erin Rademacher</div>
  </div>
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script src="/js/site.js"></script>
  <script>
<?php
 if ($portfolio) {
?>
    var imageViewer = new ImageViewer('<?= $page ?>', <?= $image_count ?>);
<?php
 }
?>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-12458765-2']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
</body>
</html>
