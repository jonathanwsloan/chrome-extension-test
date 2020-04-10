// content.js
setTimeout(function () {
    // Add menu
    $('.css-1dbjc4n.r-sydbv7.r-1b9bua6  > div:nth-child(2)').after(menu)
    // Get Saved Settings
    $('#profiles').prop('checked', localStorage.getItem('twitter_profile_visibility') == 'true')
    $('#sources').prop('checked', localStorage.getItem('twitter_sources_visibility') == 'true')
    $('#likes').prop('checked', localStorage.getItem('twitter_likes_visibility') == 'true')
    $('#ads').prop('checked', localStorage.getItem('twitter_ads_visibility') == 'true')

    // Add event listeners to each toggle
    $('#profiles').change(updateProfiles)
    $('#sources').change(updateSources)
    $('#likes').change(updateLikes)
    $('#ads').change(updateAds)

    // Continue hiding as the DOM newsfeed updates
    $(".css-1dbjc4n.r-1jgb5lz.r-1ye8kvj.r-13qz1uu").bind("DOMSubtreeModified", function () {
        updateLikes()
        updateProfiles()
        updateSources()
        updateAds()
    });
}, 1000);

function updateProfiles() {
    if ($('#profiles').is(":checked")) {
        // Remove Profile Images
        $('img[src*="profile_images"]').parent().css('visibility', 'hidden')
        // Remove Name & Username
        $('.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1loqt21.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').css('visibility', 'hidden')
    } else {
        // Show Profile Images
        $('img[src*="profile_images"]').parent().css('visibility', 'visible')
        // Show Name & Username
        $('.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1loqt21.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').css('visibility', 'visible')
    }
    localStorage.setItem('twitter_profile_visibility', $('#profiles').is(":checked"));
}

function updateLikes() {
    if ($('#likes').is(":checked")) {
        // Remove Like/Retweet/Comment numbers
        $('.css-1dbjc4n.r-xoduu5.r-1udh08x').css('visibility', 'hidden')
    } else {
        // Show Like/Retweet/Comment numbers
        $('.css-1dbjc4n.r-xoduu5.r-1udh08x').css('visibility', 'visible')
    }
    localStorage.setItem('twitter_likes_visibility', $('#likes').prop("checked"));
}

function updateSources() {
    if ($('#sources').is(":checked")) {
        // Remove if comes from like or retweet
        $('.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-5f2r5o.r-1b9bua6').css('visibility', 'hidden')
    } else {
        // Show if comes from like or retweet
        $('.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-5f2r5o.r-1b9bua6').css('visibility', 'visible')
    }

    localStorage.setItem('twitter_sources_visibility', $('#sources').is(":checked"));
}

function updateAds() {
    if ($('#ads').is(":checked")) {
        $('.r-111h2gw.r-4qtqp9.r-yyyyoo.r-1q142lx.r-ip8ujx.r-7o8qx1.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr').parents().eq(9).hide()
    } else {
        $('.r-111h2gw.r-4qtqp9.r-yyyyoo.r-1q142lx.r-ip8ujx.r-7o8qx1.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr').parents().eq(9).show()
    }
    localStorage.setItem('twitter_ads_visibility', $('#ads').is(":checked"));
}

let menu = '<div class="css-1dbjc4n r-1uaug3w r-1uhd6vh r-t23y2h r-1phboty r-rs99b7 r-1cad53l r-1udh08x">' +
    '<div class="css-1dbjc4n">' +
    '<div class="css-1dbjc4n">' +
    '<section aria-labelledby="accessible-list-0" role="region" class="css-1dbjc4n">' +
    '<div aria-label="Timeline: Trending now" class="css-1dbjc4n">' +
    '<div class="css-1dbjc4n">' +
    '<div class="css-1dbjc4n r-1adg3ll">' +
    '<div class="css-1dbjc4n">' +
    '<div class="css-1dbjc4n r-1ila09b r-rull8r r-qklmqi r-1wtj0ep r-779j7e r-1xtiow5">' +
    '<h2 aria-level="2" role="heading"' +
    'class="css-4rbku5 css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">' +
    '<div dir="auto"' +
    'class="css-901oao css-bfa6kz r-jwli3a r-1qd0xha r-1i10wst r-1vr29t4 r-ad9z0x r-1sp7lne r-bcqeeo r-qvutc0">' +
    '<span' +
    'class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Anonymize ' +
    'Twitter</span></div>' +
    '</h2>' +
    '</div>' +
    //Likes
    '<div class="css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll">' +
    '<div aria-haspopup="false" data-focusable="true" tabindex="0"' +
    'class="css-1dbjc4n r-6koalj r-779j7e r-1xtiow5 r-o7ynqc r-6416eg">' +
    '<div class="css-1dbjc4n r-16y2uox r-bnwqim">' +
    '<div dir="ltr"' +
    'class="css-901oao r-jwli3a r-1qd0xha r-1b43r93 r-vw2c0b r-ad9z0x r-bcqeeo r-vmopo1 r-qvutc0">' +
    '<span' +
    'class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Remove Likes/Comments/Retweets</span>' +
    //toggle
    '<input type="checkbox" id="likes" /><label for="likes">Toggle</label>' +
    '</div>' +
    '<div class="css-1dbjc4n r-u8s1d r-zchlnj r-1jy2w8o"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    //Profiles
    '<div class="css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll">' +
    '<div aria-haspopup="false" data-focusable="true" tabindex="0"' +
    'class="css-1dbjc4n r-6koalj r-779j7e r-1xtiow5 r-o7ynqc r-6416eg">' +
    '<div class="css-1dbjc4n r-16y2uox r-bnwqim">' +
    '<div dir="ltr"' +
    'class="css-901oao r-jwli3a r-1qd0xha r-1b43r93 r-vw2c0b r-ad9z0x r-bcqeeo r-vmopo1 r-qvutc0">' +
    '<span' +
    'class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Remove Profiles</span>' +
    //toggle
    '<input type="checkbox" id="profiles" /><label for="profiles">Toggle</label>' +
    '</div>' +
    '<div class="css-1dbjc4n r-u8s1d r-zchlnj r-1jy2w8o"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    //Ads
    '<div class="css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll">' +
    '<div aria-haspopup="false" data-focusable="true" tabindex="0"' +
    'class="css-1dbjc4n r-6koalj r-779j7e r-1xtiow5 r-o7ynqc r-6416eg">' +
    '<div class="css-1dbjc4n r-16y2uox r-bnwqim">' +
    '<div dir="ltr"' +
    'class="css-901oao r-jwli3a r-1qd0xha r-1b43r93 r-vw2c0b r-ad9z0x r-bcqeeo r-vmopo1 r-qvutc0">' +
    '<span' +
    'class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Remove Ads</span>' +
    //toggle
    '<input type="checkbox" id="ads" /><label for="ads">Toggle</label>' +
    '</div>' +
    '<div class="css-1dbjc4n r-u8s1d r-zchlnj r-1jy2w8o"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    //Sources
    '<div class="css-1dbjc4n r-1ila09b r-1adg3ll">' +
    '<div aria-haspopup="false" data-focusable="true" tabindex="0"' +
    'class="css-1dbjc4n r-6koalj r-779j7e r-1xtiow5 r-o7ynqc r-6416eg">' +
    '<div class="css-1dbjc4n r-16y2uox r-bnwqim">' +
    '<div dir="ltr"' +
    'class="css-901oao r-jwli3a r-1qd0xha r-1b43r93 r-vw2c0b r-ad9z0x r-bcqeeo r-vmopo1 r-qvutc0">' +
    '<span' +
    'class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Remove Sources</span>' +
    //toggle
    '<input type="checkbox" id="sources" /><label for="sources">Toggle</label>' +
    '</div>' +
    '<div class="css-1dbjc4n r-u8s1d r-zchlnj r-1jy2w8o"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div></div></div></div></section></div></div>' +
    '</div>'