<?php

function is_activeitem($url, $checkDefault = false) {
  if ($_SERVER['REQUEST_URI'] == $url) {
    echo ' active ';
  } else if ($checkDefault && $_SERVER['REQUEST_URI'] == '/' || $_SERVER['REQUEST_URI'] == '') {
    echo ' active ';
  }
}
?>

<div class="wrap " id="ja-mainnav">
  <div class="main">
    <div class="main-inner1 clearfix">
      
      <div class="ja-megamenu clearfix" id="ja-megamenu">
      <ul class="megamenu level0">
        <li class="mega first active">
          <a href="#" class="mega first active"
             title="Главная"><span class="menu-title">Главная</span></a>
        </li>
        <li class="mega <?php is_activeitem('/about.php', true) ?>">
          <a href="#" class="mega <?php is_activeitem('/about.php', true) ?>"
             title="Сроки и условия"><span class="menu-title">Сроки и условия</span></a>
        </li>
        <li class="mega haschild" style="width: 90px;">
          <a href="#" class="mega haschild "
             title="Услуги"><span class="menu-title">Услуги</span></a>
          <div class="childcontent cols1 " style="width: 110px; height: 109px; display: none; margin-left: 0px; left: 235px; z-index: 1002; overflow: hidden;">
            <div class="childcontent-inner-wrap" style="width: 90px; opacity: 0;">
              <div style="width: 90px;" class="childcontent-inner clearfix">
                <div style="width: 90px;" class="megacol column1 first">
                  <ul class="megamenu level1">
                    <li class="mega first <?php is_activeitem('/consalting.php', true) ?>">
                      <a href="#" class="mega first <?php is_activeitem('/consalting.php', true) ?>"
                         title="Консалтинг"><span class="menu-title">Консалтинг</span></a>
                    </li>
                    <li class="mega last <?php is_activeitem('/audit.php', true) ?>">
                      <a href="#" class="mega last <?php is_activeitem('/audit.php', true) ?>"
                         title="Аудит"><span class="menu-title">Аудит</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="mega haschild">
          <a href="#" class="mega haschild "
             title="Методическая поддержка"><span class="menu-title">Методическая поддержка</span></a>
          <div class="childcontent cols1 " style="width: 220px; height: 228px; display: none; margin-left: 0px; left: 327px; z-index: 1003; overflow: hidden;">
            <div class="childcontent-inner-wrap" style="width: 200px; opacity: 0;">
              <div style="width: 200px;" class="childcontent-inner clearfix">
                <div style="width: 200px;" class="megacol column1 first">
                  <ul class="megamenu level1">
                    <li class="mega first">
                      <a href="#" class="mega first"
                         title="Для студента"><span class="menu-title">Для студента</span></a>
                    </li>
                    <li class="mega">
                      <a href="#" class="mega"
                          title="Для вузов и ссузов"><span class="menu-title">Для вузов и ссузов</span></a>
                    </li>
                    <li class="mega">
                      <a href="#" class="mega"
                         title="Для разработчиков АПИМ"><span class="menu-title">Для разработчиков АПИМ</span></a>
                    </li>
                    <li class="mega">
                      <a href="#" class="mega"
                         title="Структуры АПИМ"><span class="menu-title">Структуры АПИМ</span></a>
                    </li>
                    <li class="mega last">
                      <a href="#" class="mega last"
                         title="Обеспечение тестовыми материалами"><span class="menu-title">Обеспечение тестовыми материалами</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="mega haschild">
          <a href="#" class="mega haschild "
             title="Именная страница"><span class="menu-title">Именная страница</span></a>
          <div class="childcontent cols1 " style="width: 220px; height: 144px; display: none; margin-left: 0px; left: 544px; z-index: 1001; overflow: hidden;">
            <div class="childcontent-inner-wrap" style="width: 200px; opacity: 0;">
              <div style="width: 200px;" class="childcontent-inner clearfix">
                <div style="width: 200px;" class="megacol column1 first">
                  <ul class="megamenu level1">
                    <li class="mega first ">
                      <a href="#" class="mega first "
                         title="Регистрация ОУ"><span class="menu-title">Регистрация ОУ</span></a>
                    </li>
                    <li class="mega">
                      <a href="#" class="mega"
                         title="Участника ФЭПО"><span class="menu-title">Участника ФЭПО</span></a>
                    </li>
                    <li class="mega last">
                      <a href="#" class="mega last"
                         title="Рецензента"><span class="menu-title">Рецензента</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="mega haschild">
          <a href="#" class="mega haschild"
             title="Тестирование"><span class="menu-title">Тестирование</span></a>
          <div class="childcontent cols1 " style="width: 220px; height: 179px; display: none;">
            <div class="childcontent-inner-wrap" style="width: 200px;">
              <div style="width: 200px;" class="childcontent-inner clearfix">
                <div style="width: 200px;" class="megacol column1 first">
                  <ul class="megamenu level1">
                    <li class="mega first">
                      <a title="Контрольное" class="mega first" href="kontrolnoe.html"><span class="menu-title">Контрольное</span></a>
                    </li>
                    <li class="mega">
                      <a href="#" class="mega"
                         title="Off-line"><span class="menu-title">Off-line</span></a>
                    </li>
                    <li class="mega">
                      <a href="#" class="mega"
                         title="Репетиционное вузам"><span class="menu-title">Репетиционное вузам</span></a>
                    </li>
                    <li class="mega last">
                      <a href="#" class="mega last"
                         title="Репетиционное ссузам"><span class="menu-title">Репетиционное ссузам</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="mega last">
          <a href="#" class="mega last"
             title="Контакты"><span class="menu-title">Контакты</span></a>
        </li>
      </ul>
    </div>            

  </div>
</div>
</div>

<script>
  var megamenu = new jaMegaMenuMoo('ja-megamenu', {
    'bgopacity': 0,
    'delayHide': 300,
    'slide': 0,
    'fading': 1,
    'direction': 'down',
    'action': 'mouseover',
    'tips': false,
    'duration': 300,
    'hidestyle': 'fastwhenshow'
  });
</script>


