var viewPrint = {
    main: function () {
        var sectionArr = $('.sectionBlock');
        var VISIBLE_SECTIONS = sectionArr.length;

        // calculate number of rows and cols
        var NUM_ROWS = -1;
        var NUM_COLS = [];

        for (var i = 0; i < 3; i++)	// initialize NUM_COLS
            NUM_COLS[i] = -1;

        if (VISIBLE_SECTIONS < 3) {
            NUM_ROWS = 1;
            NUM_COLS[0] = VISIBLE_SECTIONS;
        }

        if (VISIBLE_SECTIONS > 2 && VISIBLE_SECTIONS <= 6) {
            NUM_ROWS = 2;
            NUM_COLS[0] = 3;
            NUM_COLS[1] = VISIBLE_SECTIONS - 3;
        }
        else if (VISIBLE_SECTIONS > 6) {
            NUM_ROWS = 3;
            NUM_COLS[0] = 3;
            NUM_COLS[1] = 3;
            NUM_COLS[2] = VISIBLE_SECTIONS - 6;
        }

        //test NUM_COLS
        for (var i = 0; i < 3; i++) {
            //console.log('NUM_COLS[' + i + ']: ' + NUM_COLS[i]);
        }

        this.setup(VISIBLE_SECTIONS, sectionArr, NUM_ROWS, NUM_COLS);
        this.autoHeight(VISIBLE_SECTIONS, sectionArr, NUM_ROWS, NUM_COLS);

       
    },

    // add classes (row + number) to specify which row a group is in
    setup: function (VISIBLE_SECTIONS, sectionArr, NUM_ROWS, NUM_COLS) {
        //console.log('visible sections: ' + VISIBLE_SECTIONS);

        var alreadyIterated = 3;

        for (var i = 0; i < VISIBLE_SECTIONS; i++) {
            var rowNum = 0;

            if (i > 2 && i <= 5) {
                rowNum = 1;
            }
            else if (i > 5) {
                rowNum = 2;
            }

            var endOfRow = (rowNum * 3) + NUM_COLS[rowNum] - 1;

            //console.log('i: ' + i);
            //console.log('rowNum: ' + rowNum);
            //console.log('endOfRow: ' + endOfRow);
            //console.log(' ');

            if (rowNum != alreadyIterated && endOfRow <= VISIBLE_SECTIONS) {
                for (var j = i; j <= endOfRow; j++) {
                    //console.log('j: ' + j);
                    sectionArr.eq(j).addClass('row' + rowNum);
                }

                //console.log(' ');
                alreadyIterated = rowNum;
            }
        }
        
    },

    // calculate tallest section in each row
    // set height of other sections in that row equal to the tallest section
    // call calculatePageBreak()
    autoHeight: function (VISIBLE_SECTIONS, sectionArr, NUM_ROWS, NUM_COLS) {
        var rowArr = null;
        var maxRowHeight = [NUM_ROWS];

        // initialize maxRowHeight array
        for (var i = 0; i < NUM_ROWS; i++) {
            maxRowHeight[i] = 0;
        }

        // calculate tallest section in each row
        for (var i = 0; i < NUM_ROWS; i++) {
            rowArr = $('.row' + i);

            for (var j = 0; j < NUM_COLS[i]; j++) {
                var height = rowArr.eq(j).height();

                if (height > maxRowHeight[i]) {
                    maxRowHeight[i] = height;
                }

            }
        }

        // set height of other sections in each row equal to the tallest section
        for (var i = 0; i < NUM_ROWS; i++) {
            $('.row' + i).css({ height: maxRowHeight[i] });
        }

        // testing
        for (var i = 0; i < NUM_ROWS; i++) {
            rowArr = $('.row' + i);
            //  console.log('Row ' + i + ': ' + maxRowHeight[i]);

            // test individual sections
            for (var j = 0; j < NUM_COLS[i]; j++) {
                var height = rowArr.eq(j).height();

                // console.log('    section ' + (j + i * 3) + ': ' + height);
            }
        }

        
        this.calcTotalHeight(maxRowHeight);
    }, // end autoHeight

    // add up column height
    // if column height is greater than default page height force page break where appropriate
    calcTotalHeight: function (maxRowHeight) {
        var MAX_PAGE_HEIGHT = 855;
        var totalHeight = 0;
        var breakBeforeRow = 0;

        for (var i = 0; i < maxRowHeight.length; i++) {
            totalHeight += maxRowHeight[i];

            if (totalHeight > MAX_PAGE_HEIGHT) {
                breakBeforeRow = i;
                break;
            }
        }

        // console.log('totalHeight: ' + totalHeight);
        // console.log('breakBeforeRow: ' + breakBeforeRow);

        if (totalHeight > MAX_PAGE_HEIGHT) {
            $('.row' + breakBeforeRow).eq(0).before("<div class='pageBreak'>&nbsp;</div>");
        }
   
        if (printBtnClicked == true) {
            window.print();
            window.close();
        }

    } // end calcTotalHeight  
};     // end viewPrint

$(function () {
	viewPrint.main();
});