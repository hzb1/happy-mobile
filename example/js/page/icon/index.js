
const html = require('./index.html')

export default class Icon extends HTMLElement {
  static get tagName() {
    return 'app-icon'
  }

  connectedCallback() {
    this.innerHTML = html
    const iconList = [
      'h-appreciate', 'h-check', 'h-close', 'h-edit', 'h-emoji', 'h-favorfill', 'h-favor', 'h-loading', 'h-locationfill', 'h-location', 'h-phone', 'h-roundcheckfill', 'h-roundcheck', 'h-roundclosefill', 'h-roundclose', 'h-roundrightfill', 'h-roundright', 'h-search', 'h-taxi', 'h-timefill', 'h-time', 'h-unfold', 'h-warnfill', 'h-warn', 'h-camerafill', 'h-camera', 'h-commentfill', 'h-comment', 'h-likefill', 'h-like', 'h-notificationfill', 'h-notification', 'h-order', 'h-samefill', 'h-same', 'h-deliver', 'h-evaluate', 'h-pay', 'h-send', 'h-shop', 'h-ticket', 'h-wang', 'h-back', 'h-cascades', 'h-discover', 'h-list', 'h-more', 'h-scan', 'h-settings', 'h-questionfill', 'h-question', 'h-shopfill', 'h-form', 'h-wangfill', 'h-pic', 'h-filter', 'h-footprint', 'h-top', 'h-pulldown', 'h-pullup', 'h-right', 'h-refresh', 'h-moreandroid', 'h-deletefill', 'h-refund', 'h-cart', 'h-qrcode', 'h-remind', 'h-delete', 'h-profile', 'h-home', 'h-cartfill', 'h-discoverfill', 'h-homefill', 'h-message', 'h-addressbook', 'h-link', 'h-lock', 'h-unlock', 'h-vip', 'h-weibo', 'h-activity', 'h-big', 'h-friendaddfill', 'h-friendadd', 'h-friendfamous', 'h-friend', 'h-goods', 'h-selection', 'h-tmall', 'h-explore', 'h-present', 'h-squarecheckfill', 'h-square', 'h-squarecheck', 'h-round', 'h-roundaddfill', 'h-roundadd', 'h-add', 'h-notificationforbidfill', 'h-explorefill', 'h-fold', 'h-game', 'h-redpacket', 'h-selectionfill', 'h-similar', 'h-appreciatefill', 'h-infofill', 'h-info', 'h-tao', 'h-mobiletao', 'h-forwardfill', 'h-forward', 'h-rechargefill', 'h-recharge', 'h-vipcard', 'h-voice', 'h-voicefill', 'h-friendfavor', 'h-wifi', 'h-share', 'h-wefill', 'h-we', 'h-lightauto', 'h-lightforbid', 'h-lightfill', 'h-camerarotate', 'h-light', 'h-barcode', 'h-flashlightclose', 'h-flashlightopen', 'h-searchlist', 'h-service', 'h-sort', 'h-1212', 'h-down', 'h-mobile', 'h-mobilefill', 'h-copy', 'h-countdownfill', 'h-countdown', 'h-noticefill', 'h-notice', 'h-qiang', 'h-upstagefill', 'h-upstage', 'h-babyfill', 'h-baby', 'h-brandfill', 'h-brand', 'h-choicenessfill', 'h-choiceness', 'h-clothesfill', 'h-clothes', 'h-creativefill', 'h-creative', 'h-female', 'h-keyboard', 'h-male', 'h-newfill', 'h-new', 'h-pullleft', 'h-pullright', 'h-rankfill', 'h-rank', 'h-bad', 'h-cameraadd', 'h-focus', 'h-friendfill', 'h-cameraaddfill', 'h-apps', 'h-paintfill', 'h-paint', 'h-picfill', 'h-refresharrow', 'h-markfill', 'h-mark', 'h-presentfill', 'h-repeal', 'h-album', 'h-peoplefill', 'h-people', 'h-servicefill', 'h-repair', 'h-file', 'h-repairfill', 'h-taoxiaopu', 'h-attentionfill', 'h-attention', 'h-commandfill', 'h-command', 'h-communityfill', 'h-community', 'h-read', 'h-suan', 'h-hua', 'h-ju', 'h-tian', 'h-calendar', 'h-cut', 'h-magic', 'h-backwardfill', 'h-playfill', 'h-stop', 'h-tagfill', 'h-tag', 'h-group', 'h-all', 'h-backdelete', 'h-hotfill', 'h-hot', 'h-post', 'h-radiobox', 'h-rounddown', 'h-upload', 'h-writefill', 'h-write', 'h-radioboxfill', 'h-punch', 'h-shake', 'h-add1', 'h-move', 'h-safe', 'h-haodian', 'h-mao', 'h-qi', 'h-ye', 'h-juhuasuan', 'h-taoqianggou', 'h-tianmao', 'h-activityfill', 'h-crownfill', 'h-crown', 'h-goodsfill', 'h-messagefill', 'h-profilefill', 'h-sound', 'h-sponsorfill', 'h-sponsor', 'h-upblock', 'h-weblock', 'h-weunblock', 'h-1111', 'h-my', 'h-myfill', 'h-emojifill', 'h-emojiflashfill', 'h-flashbuyfill-copy', 'h-text', 'h-goodsfavor', 'h-musicfill', 'h-musicforbidfill', 'h-xiamiforbid', 'h-xiami', 'h-roundleftfill', 'h-triangledownfill', 'h-triangleupfill', 'h-roundleftfill-copy', 'h-pulldown1', 'h-emojilight', 'h-keyboardlight', 'h-recordfill', 'h-recordlight', 'h-record', 'h-roundaddlight', 'h-soundlight', 'h-cardboardfill', 'h-cardboard', 'h-formfill', 'h-coin', 'h-sortlight', 'h-cardboardforbid', 'h-circlefill', 'h-circle', 'h-attentionforbid', 'h-attentionforbidfill', 'h-attentionfavorfill', 'h-attentionfavor', 'h-piclight', 'h-shoplight', 'h-voicelight', 'h-attentionfavorfill-copy', 'h-full', 'h-mail', 'h-peoplelist', 'h-goodsnewfill', 'h-goodsnew', 'h-medalfill', 'h-medal', 'h-newsfill', 'h-newshotfill', 'h-newshot', 'h-news', 'h-videofill', 'h-video', 'h-askfill', 'h-ask', 'h-exit', 'h-skinfill', 'h-skin', 'h-moneybagfill', 'h-usefullfill', 'h-usefull', 'h-moneybag', 'h-redpacket_fill', 'h-subscription', 'h-home_light', 'h-my_light', 'h-community_light', 'h-cart_light', 'h-we_light', 'h-home_fill_light', 'h-cart_fill_light', 'h-community_fill_light', 'h-my_fill_light', 'h-we_fill_light', 'h-skin_light', 'h-search_light', 'h-scan_light', 'h-people_list_light', 'h-message_light', 'h-close_light', 'h-add_light', 'h-profile_light', 'h-service_light', 'h-friend_add_light', 'h-edit_light', 'h-camera_light', 'h-hot_light', 'h-refresh_light', 'h-back_light', 'h-share_light', 'h-comment_light', 'h-appreciate_light', 'h-favor_light', 'h-appreciate_fill_light', 'h-comment_fill_light', 'h-wang_light', 'h-more_android_light', 'h-friend_light', 'h-more_light', 'h-goods_favor_light', 'h-goods_new_fill_light', 'h-goods_new_light', 'h-goods_light', 'h-medal_fill_light', 'h-medal_light', 'h-news_fill_light', 'h-news_hot_fill_light', 'h-news_hot_light', 'h-news_light', 'h-video_fill_light', 'h-message_fill_light', 'h-form_light', 'h-video_light', 'h-search_list_light', 'h-form_fill_light', 'h-global_light', 'h-global', 'h-favor_fill_light', 'h-delete_light', 'h-back_android', 'h-back_android_light', 'h-down_light', 'h-round_close_light', 'h-round_close_fill_light', 'h-expressman', 'h-punch_light', 'h-evaluate_fill', 'h-furniture', 'h-dress', 'h-coffee', 'h-sports', 'h-group_light', 'h-location_light', 'h-attention_light', 'h-group_fill_light', 'h-group_fill', 'h-play_forward_fill', 'h-subscription_light', 'h-deliver_fill', 'h-notice_forbid_fill', 'h-qr_code_light', 'h-settings_light', 'h-pick', 'h-form_favor_light', 'h-round_comment_light', 'h-phone_light', 'h-round_down_light', 'h-friend_settings_light', 'h-change', 'h-round_list_light', 'h-ticket_fill', 'h-round_friend_fill', 'h-round_crown_fill', 'h-round_link_fill', 'h-round_light_fill', 'h-round_favor_fill', 'h-round_menu_fill', 'h-round_location_fill', 'h-round_pay_fill', 'h-round_like_fill', 'h-round_people_fill', 'h-round_pay', 'h-round_rank_fill', 'h-round_redpacket_fill', 'h-round_skin_fill', 'h-round_record_fill', 'h-round_ticket_fill', 'h-round_redpacket', 'h-round_text_fill', 'h-round_ticket', 'h-round_transfer_fill', 'h-subtitle_block_light', 'h-warn_light', 'h-round_transfer', 'h-vip_code_light', 'h-subtitle_unblock_light', 'h-round_shop_fill', 'h-oppose_fill_light', 'h-oppose_light', 'h-living', 'h-goods_hot_fill', 'h-ticket_money_fill', 'h-arrow_left_fill', 'h-arrow_up_fill', 'h-xiaoheiqun', 'h-auction',
    ]
    const iconContent = this.querySelector('.icon-content')
    iconList.forEach((item) => {
      const div = document.createElement('div')
      const p = document.createElement('p')
      const icon = document.createElement('h-icon')

      div.classList.add('icon-item')
      p.innerText = item
      icon.type = item

      div.appendChild(icon)
      div.appendChild(p)
      iconContent.appendChild(div)
    })
    // this.classList.add('view-show')
  }

  onView(type) {
    const container = document.querySelector('route-view')
    if (type === 'show') {
      container.classList.add('view-in')
    } else {
      container.classList.remove('view-in')
    }
  }

  disconnectedCallback() {
    this.onView('hide')
  }
}
