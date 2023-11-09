
    /*
    ** Watch_Face_Editor tool
    ** watchface js version v1.0.1
    ** Copyright © CashaCX75. All Rights Reserved
    */

    try {

      (() => {

        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        //drink is a name,can modify
        var h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__), 'drink');

        'use strict';

        //dynamic modify start

        
        let normal_background_bg_img = ''
        let normal_date_img_date_week_img = ''
        let normal_date_img_date_month_img = ''
        let normal_date_img_date_day = ''
        let normal_distance_text_text_img = ''
        let normal_step_current_text_img = ''
        let normal_step_image_progress_img_level = ''
        let normal_heart_rate_text_text_img = ''
        let normal_battery_text_text_img = ''
        let normal_battery_text_separator_img = ''
        let normal_battery_image_progress_img_level = ''
        let normal_system_dnd_img = ''
        let normal_system_lock_img = ''
        let normal_system_disconnect_img = ''
        let normal_system_clock_img = ''
        let normal_digital_clock_img_time = ''
        let idle_background_bg_img = ''
        let idle_digital_clock_img_time = ''


        //dynamic modify end

        //not required
        const logger = DeviceRuntimeCore.HmLogger.getLogger("yeguang");

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({

          init_view() {

            //dynamic modify start
                    
            
            normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 390,
              h: 450,
              src: '0001.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 38,
              y: 273,
              week_en: ["0046.png","0047.png","0048.png","0049.png","0050.png","0051.png","0052.png"],
              week_tc: ["0046.png","0047.png","0048.png","0049.png","0050.png","0051.png","0052.png"],
              week_sc: ["0046.png","0047.png","0048.png","0049.png","0050.png","0051.png","0052.png"],
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_month_img = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 205,
              month_startY: 310,
              month_sc_array: ["0053.png","0054.png","0055.png","0056.png","0057.png","0058.png","0059.png","0060.png","0061.png","0062.png","0063.png","0064.png"],
              month_tc_array: ["0053.png","0054.png","0055.png","0056.png","0057.png","0058.png","0059.png","0060.png","0061.png","0062.png","0063.png","0064.png"],
              month_en_array: ["0053.png","0054.png","0055.png","0056.png","0057.png","0058.png","0059.png","0060.png","0061.png","0062.png","0063.png","0064.png"],
              month_is_character: true ,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 153,
              day_startY: 310,
              day_sc_array: ["0036.png","0037.png","0038.png","0039.png","0040.png","0041.png","0042.png","0043.png","0044.png","0045.png"],
              day_tc_array: ["0036.png","0037.png","0038.png","0039.png","0040.png","0041.png","0042.png","0043.png","0044.png","0045.png"],
              day_en_array: ["0036.png","0037.png","0038.png","0039.png","0040.png","0041.png","0042.png","0043.png","0044.png","0045.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.LEFT,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 204,
              y: 355,
              font_array: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png","0030.png","0031.png","0032.png"],
              padding: false,
              h_space: 3,
              dot_image: '0033.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 12,
              y: 355,
              font_array: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png","0030.png","0031.png","0032.png"],
              padding: false,
              h_space: 3,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 343,
              y: 163,
              image_array: ["0074.png","0075.png"],
              image_length: 2,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 209,
              y: 52,
              font_array: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png","0030.png","0031.png","0032.png"],
              padding: false,
              h_space: 3,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 47,
              y: 52,
              font_array: ["0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png","0030.png","0031.png","0032.png"],
              padding: false,
              h_space: 3,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_text_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 148,
              y: 52,
              src: '0035.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 42,
              y: 108,
              image_array: ["0065.png","0066.png","0067.png","0068.png"],
              image_length: 4,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_dnd_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 63,
              y: 9,
              src: '0071.png',
              type: hmUI.system_status.DISTURB,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_lock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 116,
              y: 9,
              src: '0072.png',
              type: hmUI.system_status.LOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 295,
              y: 9,
              src: '0080.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 244,
              y: 9,
              src: '0073.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 7,
              hour_startY: 163,
              hour_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              hour_zero: 1,
              hour_space: 8,
              hour_align: hmUI.align.LEFT,

              minute_startX: 180,
              minute_startY: 163,
              minute_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              minute_zero: 1,
              minute_space: 8,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              second_startX: 323,
              second_startY: 205,
              second_array: ["0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png"],
              second_zero: 1,
              second_space: 4,
              second_follow: 0,
              second_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });


            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 390,
              h: 450,
              src: '0081.png',
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 39,
              hour_startY: 179,
              hour_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              hour_zero: 1,
              hour_space: 8,
              hour_align: hmUI.align.LEFT,

              minute_startX: 213,
              minute_startY: 179,
              minute_array: ["0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png"],
              minute_zero: 1,
              minute_space: 8,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONAL_AOD,
            });


            //dynamic modify end
          },

          onInit() {
            console.log('index page.js on init invoke')

            this.init_view()

          },

          onReady() {
            console.log('index page.js on ready invoke')
          },

          onShow() {
            console.log('index page.js on show invoke')
          },

          onHide() {
            console.log('index page.js on hide invoke')
          },

          onDestory() {
            console.log('index page.js on destory invoke')
          },
        });

      })()
    } catch (e) {
      console.log(e)
    }
  