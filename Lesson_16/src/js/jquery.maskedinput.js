





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-qQ+v+W1uJYfDMrQ/cwCVI+AGTsn1yi4rCU6KX45obe52BoF+WiHNeQ11u63iJA05vyivY57xNbhAsyK4/j1ZIQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-01356238c65ce56a395237b592b58668.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-0VaGyxNOIzt/BrWt4GClaNhjNqwpdoLOfj73ICt2NuGGdt7TCEJTF+MOOu4GhB7v5qicSD4wX+vY5BIFg4rGXg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-09debddb368dcf769c737ccced3fffb6.css" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>jquery.maskedinput/jquery.maskedinput.js at master · digitalBush/jquery.maskedinput</title>
    <meta name="description" content="jQuery Masked Input Plugin">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/129068?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="digitalBush/jquery.maskedinput" /><meta property="og:url" content="https://github.com/digitalBush/jquery.maskedinput" /><meta property="og:description" content="jquery.maskedinput - jQuery Masked Input Plugin" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjY1MjY2NDExOjJmZTliMDU3NDFjNDc1OGNkNTEzZWM2ZGY0YTNlNmU4Y2VjNWUzZjNjMGQ3Zjg0ZWE3ODk0MWFmZGZhZTRkZTc=--2de366bbd1f33b1a9df667be403638d04faf013a">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="5D9B:0DBE:3D8C5C9:7575AC0:5B5B677A" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="5D9B:0DBE:3D8C5C9:7575AC0:5B5B677A" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="37742928" /><meta name="octolytics-actor-login" content="AndreiKosianok" /><meta name="octolytics-actor-hash" content="b52df3c15bc20943259aa3dd7e0169cb453db2ec59e477c9307ffd72864cf1b4" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



  <meta class="js-ga-set" name="userId" content="41eeae62043885e2f9597c6164fd77f7" %>

<meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="AndreiKosianok">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NmY4MTVjNzhlYWNkOTFiZjY4YjdlYTU3YzY1ZjhkNDQ3MjU3YTMxODAwNWZiN2Q3YTA0NDMyYjIwMTFmMGM5Ynx7InJlbW90ZV9hZGRyZXNzIjoiMzcuMjE0LjIxNC4xIiwicmVxdWVzdF9pZCI6IjVEOUI6MERCRTozRDhDNUM5Ojc1NzVBQzA6NUI1QjY3N0EiLCJ0aW1lc3RhbXAiOjE1MzI3MTY5MjUsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_PLAN_RESTRICTION_EDITOR,MARKETPLACE_SEARCH,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES,MARKETPLACE_RETARGETING,UNSELECTABLE_DIFF_MARKERS">

  <meta name="html-safe-nonce" content="21f05fde57b4e937b0abc63b7c4593b73c38616b">

  <meta http-equiv="x-pjax-version" content="624a84b10cb29b7cdc5027f93865761c">
  

      <link href="https://github.com/digitalBush/jquery.maskedinput/commits/master.atom" rel="alternate" title="Recent Commits to jquery.maskedinput:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/digitalBush/jquery.maskedinput git https://github.com/digitalBush/jquery.maskedinput.git">

  <meta name="octolytics-dimension-user_id" content="129068" /><meta name="octolytics-dimension-user_login" content="digitalBush" /><meta name="octolytics-dimension-repository_id" content="451490" /><meta name="octolytics-dimension-repository_nwo" content="digitalBush/jquery.maskedinput" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="451490" /><meta name="octolytics-dimension-repository_network_root_nwo" content="digitalBush/jquery.maskedinput" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/digitalBush/jquery.maskedinput/blob/master/dist/jquery.maskedinput.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="search combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="true"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="451490" data-scoped-search-url="/digitalBush/jquery.maskedinput/search" data-unscoped-search-url="/search" action="/digitalBush/jquery.maskedinput/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=Gi1ukkOQygQYYoAsLVp1h6kKfSCCp7Ze1dZRy0uRMSHIljwLsaI+ssWfYa4tgxQRTNZD91nkQetiZM5GDV6EyA=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li>
                <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>              </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:37742928" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



      </details-menu>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-overlay details-reset d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@AndreiKosianok" class="avatar float-left mr-1" src="https://avatars2.githubusercontent.com/u/37742928?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        <ul>
          <li class="dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">AndreiKosianok</strong>
          </li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="/AndreiKosianok" data-ga-click="Header, go to profile, text:your profile">Your profile</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/AndreiKosianok?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/AndreiKosianok?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a></li>
            <li><a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a></li>
          <li>
            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="cH5oWna+K7xJAbpjC8ZsfLPV7+otEr7LDcfNF+WJqsTQ69AiNSnrcfsBPpAux54al8Qiks6w8H+24/7sw+Lf2g==" />
              <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
                Sign out
              </button>
</form>          </li>
        </ul>
      </details-menu>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="FvC6xf8lbYScIs6ou8cxGbLkQNVg6TCVTlge3fYsVw+2ZQK9vLKtSS4iSluexsN/lvWNrYNLfiH1fC0m0EciEQ==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">


</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      






  <div class="flash flash-warn flash-full border-0 text-center text-bold py-2">
    This repository has been archived by the owner. It is now read-only.
  </div>

  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="P2VliyYNKRw6gEAKxafOqEzml15fomShkP/TvbRosRZOB5xVxFANfKeG4btEq8dyWcgm9mcsxxzvB+AKl3u9rg==" />      <input type="hidden" name="repository_id" id="repository_id" value="451490" class="form-control" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/digitalBush/jquery.maskedinput/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/digitalBush/jquery.maskedinput/watchers"
            aria-label="101 users are watching this repository">
            101
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_included" value="included" checked="checked" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_subscribed" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_ignore" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/digitalBush/jquery.maskedinput/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="fhUI94wxiFlCZypuo9ZM0ri2bChCCSPRRIR4F60qI5fpFEC9PwvYNdqYOe9Ct7DhL4x2A8FjteXzcxaxFzPzNA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar digitalBush/jquery.maskedinput"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/digitalBush/jquery.maskedinput/stargazers"
           aria-label="1955 users starred this repository">
          1,955
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/digitalBush/jquery.maskedinput/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ldd9m24hleQ7pDuLAhgocmOKrfMOfeebfE0c7DIkSazQWx2PQdeWaHEp1T7sLJcJiiNI6tRlBUhkTC1qXytfSQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star digitalBush/jquery.maskedinput"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/digitalBush/jquery.maskedinput/stargazers"
           aria-label="1955 users starred this repository">
          1,955
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/digitalBush/jquery.maskedinput/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="YuchDl6UoqrhGvJeTptOP6mG+asV8lbXpZD49OHZAW72x6jYQ8iUGYaPYkS2bb5Vp3BKPjUSoat3fveJU6Tb8w==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of digitalBush/jquery.maskedinput to your account"
                aria-label="Fork your own copy of digitalBush/jquery.maskedinput to your account">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/digitalBush/jquery.maskedinput/network/members" class="social-count"
       aria-label="825 users forked this repository">
      825
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/digitalBush">digitalBush</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/digitalBush/jquery.maskedinput">jquery.maskedinput</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /digitalBush/jquery.maskedinput" href="/digitalBush/jquery.maskedinput">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /digitalBush/jquery.maskedinput/pulls" href="/digitalBush/jquery.maskedinput/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /digitalBush/jquery.maskedinput/pulse" href="/digitalBush/jquery.maskedinput/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/digitalBush/jquery.maskedinput/blob/4a146e61b83e756446ce17f67f934abd644dafbb/dist/jquery.maskedinput.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:1f764617321589c4ec1b5bd25ca75e08 -->

  

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/digitalBush/jquery.maskedinput/blob/2.0/dist/jquery.maskedinput.js"
               data-name="2.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/digitalBush/jquery.maskedinput/blob/gh-pages/dist/jquery.maskedinput.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/digitalBush/jquery.maskedinput/blob/key-event-refactoring/dist/jquery.maskedinput.js"
               data-name="key-event-refactoring"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                key-event-refactoring
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/digitalBush/jquery.maskedinput/blob/master/dist/jquery.maskedinput.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/digitalBush/jquery.maskedinput/blob/subtree-releases/dist/jquery.maskedinput.js"
               data-name="subtree-releases"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                subtree-releases
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/digitalBush/jquery.maskedinput/tree/1.4.1/dist/jquery.maskedinput.js"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/digitalBush/jquery.maskedinput/tree/1.4.0/dist/jquery.maskedinput.js"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/digitalBush/jquery.maskedinput/tree/1.3.1/dist/jquery.maskedinput.js"
              data-name="1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.1">
                1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/digitalBush/jquery.maskedinput/tree/1.3/dist/jquery.maskedinput.js"
              data-name="1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3">
                1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/digitalBush/jquery.maskedinput/tree/1.2.2/dist/jquery.maskedinput.js"
              data-name="1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.2">
                1.2.2
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/digitalBush/jquery.maskedinput/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/digitalBush/jquery.maskedinput"><span>jquery.maskedinput</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/digitalBush/jquery.maskedinput/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">jquery.maskedinput.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/digitalBush/jquery.maskedinput/commit/f19728180c604c1b0c62d6aa97af262c0c04d71c" data-pjax>
          f197281
        </a>
        <relative-time datetime="2015-02-11T03:17:34Z">Feb 11, 2015</relative-time>
      </span>
      <div>
        <a rel="author" data-skip-pjax="true" data-hovercard-user-id="129068" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/digitalBush"><img class="avatar" src="https://avatars1.githubusercontent.com/u/129068?s=40&amp;v=4" width="20" height="20" alt="@digitalBush" /></a>
        <a class="user-mention" rel="author" data-hovercard-user-id="129068" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/digitalBush">digitalBush</a>
          <a data-pjax="true" title="1.4.1" class="message" href="/digitalBush/jquery.maskedinput/commit/f19728180c604c1b0c62d6aa97af262c0c04d71c">1.4.1</a>
      </div>

    <div class="commit-tease-contributors">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary class="btn-link" aria-haspopup="dialog" >
    
    <span><strong>4</strong> contributors</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/digitalBush">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/129068?s=40&amp;v=4" width="20" height="20" />
                digitalBush
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/gburghardt">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/340995?s=40&amp;v=4" width="20" height="20" />
                gburghardt
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/codeimpossible">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/176476?s=40&amp;v=4" width="20" height="20" />
                codeimpossible
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/holtkamp">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/776405?s=40&amp;v=4" width="20" height="20" />
                holtkamp
</a>            </li>
        </ul>

  </details-dialog>
</details>
          <a class="avatar-link" data-hovercard-user-id="129068" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/digitalBush/jquery.maskedinput/commits/master/dist/jquery.maskedinput.js?author=digitalBush">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/129068?s=40&amp;v=4" width="20" height="20" alt="@digitalBush" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="340995" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/digitalBush/jquery.maskedinput/commits/master/dist/jquery.maskedinput.js?author=gburghardt">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/340995?s=40&amp;v=4" width="20" height="20" alt="@gburghardt" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="176476" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/digitalBush/jquery.maskedinput/commits/master/dist/jquery.maskedinput.js?author=codeimpossible">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/176476?s=40&amp;v=4" width="20" height="20" alt="@codeimpossible" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="776405" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/digitalBush/jquery.maskedinput/commits/master/dist/jquery.maskedinput.js?author=holtkamp">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/776405?s=40&amp;v=4" width="20" height="20" alt="@holtkamp" /> 
</a>

    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/digitalBush/jquery.maskedinput/raw/master/dist/jquery.maskedinput.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/digitalBush/jquery.maskedinput/blame/master/dist/jquery.maskedinput.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/digitalBush/jquery.maskedinput/commits/master/dist/jquery.maskedinput.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/digitalBush/jquery.maskedinput?branch=master&amp;filepath=dist%2Fjquery.maskedinput.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/digitalBush/jquery.maskedinput/edit/master/dist/jquery.maskedinput.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="5O7XgwCsBfm+2AVdYUyqZ9M8sXLsIMiHWuJaqxs6ikGrB2Vzq8E2udLUmVwzXM9WWH8dfcd9ybtqA7JKWJSopg==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/digitalBush/jquery.maskedinput/delete/master/dist/jquery.maskedinput.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="oDcLTMo5l0XZsQddjKOmv/obnFpRUOsCux7Saab+XoQIepdmAMVjLQCcMvhVvzlBoUj+zH9HyHJEmyGELhU8HQ==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      182 lines (182 sloc)
      <span class="file-info-divider"></span>
    10.1 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    jQuery Masked Input Plugin</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    Version: 1.4.1</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">!</span><span class="pl-k">function</span>(<span class="pl-smi">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> define <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span> <span class="pl-k">?</span> <span class="pl-en">define</span>([ <span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span> ], factory) <span class="pl-k">:</span> <span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">?</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> jQuery);</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">}(<span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> caretTimeoutId, ua <span class="pl-k">=</span> <span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>, iPhone <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>iphone<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(ua), chrome <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>chrome<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(ua), android <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>android<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(ua);</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-smi">mask</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        definitions<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>9<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[0-9]<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">            a<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[A-Za-z]<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[A-Za-z0-9]<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        autoclear<span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        dataName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rawMaskFn<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        placeholder<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">caret</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">begin</span>, <span class="pl-smi">end</span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> range;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">!==</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:hidden<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> begin <span class="pl-k">?</span> (end <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> end <span class="pl-k">?</span> end <span class="pl-k">:</span> begin, </td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">setSelectionRange</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-c1">setSelectionRange</span>(begin, end) <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">createTextRange</span> <span class="pl-k">&amp;&amp;</span> (range <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">createTextRange</span>(), </td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">range</span>.<span class="pl-c1">collapse</span>(<span class="pl-k">!</span><span class="pl-c1">0</span>), <span class="pl-smi">range</span>.<span class="pl-en">moveEnd</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>, end), <span class="pl-smi">range</span>.<span class="pl-en">moveStart</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>, begin), </td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">range</span>.<span class="pl-c1">select</span>());</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">            })) <span class="pl-k">:</span> (<span class="pl-c1">this</span>[<span class="pl-c1">0</span>].<span class="pl-smi">setSelectionRange</span> <span class="pl-k">?</span> (begin <span class="pl-k">=</span> <span class="pl-c1">this</span>[<span class="pl-c1">0</span>].<span class="pl-smi">selectionStart</span>, end <span class="pl-k">=</span> <span class="pl-c1">this</span>[<span class="pl-c1">0</span>].<span class="pl-smi">selectionEnd</span>) <span class="pl-k">:</span> <span class="pl-c1">document</span>.<span class="pl-c1">selection</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">document</span>.<span class="pl-c1">selection</span>.<span class="pl-smi">createRange</span> <span class="pl-k">&amp;&amp;</span> (range <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">selection</span>.<span class="pl-c1">createRange</span>(), </td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">            begin <span class="pl-k">=</span> <span class="pl-c1">0</span> <span class="pl-k">-</span> <span class="pl-smi">range</span>.<span class="pl-en">duplicate</span>().<span class="pl-en">moveStart</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>, <span class="pl-k">-</span><span class="pl-c1">1e5</span>), end <span class="pl-k">=</span> begin <span class="pl-k">+</span> <span class="pl-smi">range</span>.<span class="pl-c1">text</span>.<span class="pl-c1">length</span>), </td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">                begin<span class="pl-k">:</span> begin,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">                end<span class="pl-k">:</span> end</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">unmask</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>unmask<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">mask</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">mask</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>mask <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">                input <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> fn <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-c1">data</span>(<span class="pl-smi">$</span>.<span class="pl-smi">mask</span>.<span class="pl-smi">dataName</span>);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> fn <span class="pl-k">?</span> <span class="pl-en">fn</span>() <span class="pl-k">:</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> settings <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">                autoclear<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">mask</span>.<span class="pl-smi">autoclear</span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">                placeholder<span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">mask</span>.<span class="pl-smi">placeholder</span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">                completed<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">            }, settings), defs <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">mask</span>.<span class="pl-smi">definitions</span>, tests <span class="pl-k">=</span> [], partialPosition <span class="pl-k">=</span> len <span class="pl-k">=</span> <span class="pl-smi">mask</span>.<span class="pl-c1">length</span>, </td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">            firstNonMaskPos <span class="pl-k">=</span> <span class="pl-c1">null</span>, <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-smi">mask</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">c</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> c <span class="pl-k">?</span> (len<span class="pl-k">--</span>, partialPosition <span class="pl-k">=</span> i) <span class="pl-k">:</span> defs[c] <span class="pl-k">?</span> (<span class="pl-smi">tests</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(defs[c])), </td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">null</span> <span class="pl-k">===</span> firstNonMaskPos <span class="pl-k">&amp;&amp;</span> (firstNonMaskPos <span class="pl-k">=</span> <span class="pl-smi">tests</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>), partialPosition <span class="pl-k">&gt;</span> i <span class="pl-k">&amp;&amp;</span> (lastRequiredNonMaskPos <span class="pl-k">=</span> <span class="pl-smi">tests</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>)) <span class="pl-k">:</span> <span class="pl-smi">tests</span>.<span class="pl-c1">push</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">            }), <span class="pl-c1">this</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>unmask<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">tryFireCompleted</span>() {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">settings</span>.<span class="pl-smi">completed</span>) {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> firstNonMaskPos; lastRequiredNonMaskPos <span class="pl-k">&gt;=</span> i; i<span class="pl-k">++</span>) <span class="pl-k">if</span> (tests[i] <span class="pl-k">&amp;&amp;</span> buffer[i] <span class="pl-k">===</span> <span class="pl-en">getPlaceholder</span>(i)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">settings</span>.<span class="pl-smi">completed</span>.<span class="pl-c1">call</span>(input);</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">getPlaceholder</span>(<span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">settings</span>.<span class="pl-smi">placeholder</span>.<span class="pl-c1">charAt</span>(i <span class="pl-k">&lt;</span> <span class="pl-smi">settings</span>.<span class="pl-smi">placeholder</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> i <span class="pl-k">:</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">seekNext</span>(<span class="pl-smi">pos</span>) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (;<span class="pl-k">++</span>pos <span class="pl-k">&lt;</span> len <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>tests[pos]; ) ;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> pos;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">seekPrev</span>(<span class="pl-smi">pos</span>) {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (;<span class="pl-k">--</span>pos <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>tests[pos]; ) ;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> pos;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">shiftL</span>(<span class="pl-smi">begin</span>, <span class="pl-smi">end</span>) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> i, j;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-c1">0</span> <span class="pl-k">&gt;</span> begin)) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">for</span> (i <span class="pl-k">=</span> begin, j <span class="pl-k">=</span> <span class="pl-en">seekNext</span>(end); len <span class="pl-k">&gt;</span> i; i<span class="pl-k">++</span>) <span class="pl-k">if</span> (tests[i]) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> (<span class="pl-k">!</span>(len <span class="pl-k">&gt;</span> j <span class="pl-k">&amp;&amp;</span> tests[i].<span class="pl-c1">test</span>(buffer[j]))) <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">                            buffer[i] <span class="pl-k">=</span> buffer[j], buffer[j] <span class="pl-k">=</span> <span class="pl-en">getPlaceholder</span>(j), j <span class="pl-k">=</span> <span class="pl-en">seekNext</span>(j);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">writeBuffer</span>(), <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(firstNonMaskPos, begin));</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">shiftR</span>(<span class="pl-smi">pos</span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> i, c, j, t;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (i <span class="pl-k">=</span> pos, c <span class="pl-k">=</span> <span class="pl-en">getPlaceholder</span>(pos); len <span class="pl-k">&gt;</span> i; i<span class="pl-k">++</span>) <span class="pl-k">if</span> (tests[i]) {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (j <span class="pl-k">=</span> <span class="pl-en">seekNext</span>(i), t <span class="pl-k">=</span> buffer[i], buffer[i] <span class="pl-k">=</span> c, <span class="pl-k">!</span>(len <span class="pl-k">&gt;</span> j <span class="pl-k">&amp;&amp;</span> tests[j].<span class="pl-c1">test</span>(t))) <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">                        c <span class="pl-k">=</span> t;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">androidInputEvent</span>() {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> curVal <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>(), pos <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">caret</span>();</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (oldVal <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">oldVal</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">oldVal</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-smi">curVal</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">for</span> (<span class="pl-en">checkVal</span>(<span class="pl-k">!</span><span class="pl-c1">0</span>); <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>tests[<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>]; ) <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span><span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>) <span class="pl-k">for</span> (;<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">&lt;</span> firstNonMaskPos <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>tests[<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>]; ) <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>, <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">                    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">for</span> (<span class="pl-en">checkVal</span>(<span class="pl-k">!</span><span class="pl-c1">0</span>); <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">&lt;</span> len <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>tests[<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>]; ) <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>, <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">tryFireCompleted</span>();</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">blurEvent</span>() {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">checkVal</span>(), <span class="pl-smi">input</span>.<span class="pl-en">val</span>() <span class="pl-k">!=</span> focusText <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">input</span>.<span class="pl-en">change</span>();</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">keydownEvent</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>readonly<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> pos, begin, end, k <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">                        oldVal <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>(), <span class="pl-c1">8</span> <span class="pl-k">===</span> k <span class="pl-k">||</span> <span class="pl-c1">46</span> <span class="pl-k">===</span> k <span class="pl-k">||</span> iPhone <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">127</span> <span class="pl-k">===</span> k <span class="pl-k">?</span> (pos <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(), </td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">                        begin <span class="pl-k">=</span> <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>, end <span class="pl-k">=</span> <span class="pl-smi">pos</span>.<span class="pl-smi">end</span>, end <span class="pl-k">-</span> begin <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> (begin <span class="pl-k">=</span> <span class="pl-c1">46</span> <span class="pl-k">!==</span> k <span class="pl-k">?</span> <span class="pl-en">seekPrev</span>(begin) <span class="pl-k">:</span> end <span class="pl-k">=</span> <span class="pl-en">seekNext</span>(begin <span class="pl-k">-</span> <span class="pl-c1">1</span>), </td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">                        end <span class="pl-k">=</span> <span class="pl-c1">46</span> <span class="pl-k">===</span> k <span class="pl-k">?</span> <span class="pl-en">seekNext</span>(end) <span class="pl-k">:</span> end), <span class="pl-en">clearBuffer</span>(begin, end), <span class="pl-en">shiftL</span>(begin, end <span class="pl-k">-</span> <span class="pl-c1">1</span>), </td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()) <span class="pl-k">:</span> <span class="pl-c1">13</span> <span class="pl-k">===</span> k <span class="pl-k">?</span> <span class="pl-smi">blurEvent</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, e) <span class="pl-k">:</span> <span class="pl-c1">27</span> <span class="pl-k">===</span> k <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">input</span>.<span class="pl-en">val</span>(focusText), </td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(<span class="pl-c1">0</span>, <span class="pl-en">checkVal</span>()), <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>());</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">keypressEvent</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>readonly<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> p, c, next, k <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span>, pos <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">caret</span>();</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-smi">e</span>.<span class="pl-smi">ctrlKey</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">altKey</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">metaKey</span> <span class="pl-k">||</span> <span class="pl-c1">32</span> <span class="pl-k">&gt;</span> k) <span class="pl-k">&amp;&amp;</span> k <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">13</span> <span class="pl-k">!==</span> k) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> (<span class="pl-smi">pos</span>.<span class="pl-smi">end</span> <span class="pl-k">-</span> <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">clearBuffer</span>(<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>, <span class="pl-smi">pos</span>.<span class="pl-smi">end</span>), <span class="pl-en">shiftL</span>(<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span>, <span class="pl-smi">pos</span>.<span class="pl-smi">end</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>)), </td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">                            p <span class="pl-k">=</span> <span class="pl-en">seekNext</span>(<span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>), len <span class="pl-k">&gt;</span> p <span class="pl-k">&amp;&amp;</span> (c <span class="pl-k">=</span> <span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(k), tests[p].<span class="pl-c1">test</span>(c))) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">if</span> (<span class="pl-en">shiftR</span>(p), buffer[p] <span class="pl-k">=</span> c, <span class="pl-en">writeBuffer</span>(), next <span class="pl-k">=</span> <span class="pl-en">seekNext</span>(p), android) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">var</span> <span class="pl-en">proxy</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">caret</span>, input, next)();</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">                                    };</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-c1">setTimeout</span>(proxy, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">                                } <span class="pl-k">else</span> <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(next);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">                                <span class="pl-smi">pos</span>.<span class="pl-smi">begin</span> <span class="pl-k">&lt;=</span> lastRequiredNonMaskPos <span class="pl-k">&amp;&amp;</span> <span class="pl-en">tryFireCompleted</span>();</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                            <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">clearBuffer</span>(<span class="pl-smi">start</span>, <span class="pl-smi">end</span>) {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> i;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (i <span class="pl-k">=</span> start; end <span class="pl-k">&gt;</span> i <span class="pl-k">&amp;&amp;</span> len <span class="pl-k">&gt;</span> i; i<span class="pl-k">++</span>) tests[i] <span class="pl-k">&amp;&amp;</span> (buffer[i] <span class="pl-k">=</span> <span class="pl-en">getPlaceholder</span>(i));</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">writeBuffer</span>() {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">input</span>.<span class="pl-en">val</span>(<span class="pl-smi">buffer</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> <span class="pl-en">checkVal</span>(<span class="pl-smi">allow</span>) {</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> i, c, pos, test <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>(), lastMatch <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>, pos <span class="pl-k">=</span> <span class="pl-c1">0</span>; len <span class="pl-k">&gt;</span> i; i<span class="pl-k">++</span>) <span class="pl-k">if</span> (tests[i]) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">for</span> (buffer[i] <span class="pl-k">=</span> <span class="pl-en">getPlaceholder</span>(i); pos<span class="pl-k">++</span> <span class="pl-k">&lt;</span> <span class="pl-smi">test</span>.<span class="pl-c1">length</span>; ) <span class="pl-k">if</span> (c <span class="pl-k">=</span> <span class="pl-smi">test</span>.<span class="pl-c1">charAt</span>(pos <span class="pl-k">-</span> <span class="pl-c1">1</span>), </td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                        tests[i].<span class="pl-c1">test</span>(c)) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">                            buffer[i] <span class="pl-k">=</span> c, lastMatch <span class="pl-k">=</span> i;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (pos <span class="pl-k">&gt;</span> <span class="pl-smi">test</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">                            <span class="pl-en">clearBuffer</span>(i <span class="pl-k">+</span> <span class="pl-c1">1</span>, len);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">                    } <span class="pl-k">else</span> buffer[i] <span class="pl-k">===</span> <span class="pl-smi">test</span>.<span class="pl-c1">charAt</span>(pos) <span class="pl-k">&amp;&amp;</span> pos<span class="pl-k">++</span>, partialPosition <span class="pl-k">&gt;</span> i <span class="pl-k">&amp;&amp;</span> (lastMatch <span class="pl-k">=</span> i);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> allow <span class="pl-k">?</span> <span class="pl-en">writeBuffer</span>() <span class="pl-k">:</span> partialPosition <span class="pl-k">&gt;</span> lastMatch <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-smi">settings</span>.<span class="pl-smi">autoclear</span> <span class="pl-k">||</span> <span class="pl-smi">buffer</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> defaultBuffer <span class="pl-k">?</span> (<span class="pl-smi">input</span>.<span class="pl-en">val</span>() <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">clearBuffer</span>(<span class="pl-c1">0</span>, len)) <span class="pl-k">:</span> <span class="pl-en">writeBuffer</span>() <span class="pl-k">:</span> (<span class="pl-en">writeBuffer</span>(), <span class="pl-smi">input</span>.<span class="pl-en">val</span>(<span class="pl-smi">input</span>.<span class="pl-en">val</span>().<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, lastMatch <span class="pl-k">+</span> <span class="pl-c1">1</span>))), </td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">                    partialPosition <span class="pl-k">?</span> i <span class="pl-k">:</span> firstNonMaskPos;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> input <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>), buffer <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(<span class="pl-smi">mask</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), <span class="pl-k">function</span>(<span class="pl-smi">c</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> c <span class="pl-k">?</span> defs[c] <span class="pl-k">?</span> <span class="pl-en">getPlaceholder</span>(i) <span class="pl-k">:</span> c <span class="pl-k">:</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">                }), defaultBuffer <span class="pl-k">=</span> <span class="pl-smi">buffer</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), focusText <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">input</span>.<span class="pl-c1">data</span>(<span class="pl-smi">$</span>.<span class="pl-smi">mask</span>.<span class="pl-smi">dataName</span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">map</span>(buffer, <span class="pl-k">function</span>(<span class="pl-smi">c</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> tests[i] <span class="pl-k">&amp;&amp;</span> c <span class="pl-k">!=</span> <span class="pl-en">getPlaceholder</span>(i) <span class="pl-k">?</span> c <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">                    }).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">                }), <span class="pl-smi">input</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>unmask<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">input</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.mask<span class="pl-pds">&quot;</span></span>).<span class="pl-en">removeData</span>(<span class="pl-smi">$</span>.<span class="pl-smi">mask</span>.<span class="pl-smi">dataName</span>);</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">                }).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>focus.mask<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>readonly<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">clearTimeout</span>(caretTimeoutId);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> pos;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">                        focusText <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>(), pos <span class="pl-k">=</span> <span class="pl-en">checkVal</span>(), caretTimeoutId <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">                            <span class="pl-smi">input</span>.<span class="pl-c1">get</span>(<span class="pl-c1">0</span>) <span class="pl-k">===</span> <span class="pl-c1">document</span>.<span class="pl-smi">activeElement</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">writeBuffer</span>(), pos <span class="pl-k">==</span> <span class="pl-smi">mask</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(<span class="pl-c1">0</span>, pos) <span class="pl-k">:</span> <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(pos));</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">                        }, <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">                }).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>blur.mask<span class="pl-pds">&quot;</span></span>, blurEvent).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keydown.mask<span class="pl-pds">&quot;</span></span>, keydownEvent).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keypress.mask<span class="pl-pds">&quot;</span></span>, keypressEvent).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.mask paste.mask<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>readonly<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> pos <span class="pl-k">=</span> <span class="pl-en">checkVal</span>(<span class="pl-k">!</span><span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">input</span>.<span class="pl-en">caret</span>(pos), <span class="pl-en">tryFireCompleted</span>();</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">                    }, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">                }), chrome <span class="pl-k">&amp;&amp;</span> android <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">input</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.mask<span class="pl-pds">&quot;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.mask<span class="pl-pds">&quot;</span></span>, androidInputEvent), </td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">checkVal</span>();</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/digitalBush/jquery.maskedinput/blame/4a146e61b83e756446ce17f67f934abd644dafbb/dist/jquery.maskedinput.js">View git blame</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

  </div>

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.30027s from unicorn-1740167992-609z0">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-+v/Ml9bhCZBNwI4OpE2KYUOOnV8y0TR5ZdiCuK2M48oQ6+5nqdJypwtiYw/FcAB19a+DtH2qkxZh3JK3U2EWng==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-20bd6212a5bea8a82fa9be8f0657b328.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-4acL5OJDvDq8vS+GPIhHPYsS7T1M/a+ioG5juPcRdzukUvqiNOi7i84hgBsH5qM9zuivNF8/VfF5p5n1Qg+GKw==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-d05299b8dc956f829d6818f116d102b9.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

