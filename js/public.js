$(function(){
	
	var acen_edit = ace.edit('mdeditor'); 
            acen_edit.setTheme('ace/theme/chrome');
            acen_edit.getSession().setMode('ace/mode/markdown');
            acen_edit.renderer.setShowPrintMargin(false);
            acen_edit.setOption("wrap","Free");
            $("#mdeditor").keyup(function() {
                $("#preview").html(marked(acen_edit.getValue()));
            });
            function insertText(val){
                acen_edit.insert(val);//光标位置插入
            }
            
            $("#theme").change(function() {
               acen_edit.setTheme($(this).val());
           })
           $("#fontsize").change(function() {
               acen_edit.setFontSize($(this).val());
           }) 
           $("#folding").change(function() {
               session.setFoldStyle($(this).val());
           })
           $("#select_style").change(function() {
               acen_edit.setOption("selectionStyle", this.checked ? "line" : "text");
           })
           $("#highlight_active").change(function() {
               acen_edit.setHighlightActiveLine(this.checked);
           })
           $("#soft_wrap").change(function() {
               acen_edit.setOption("wrap", $(this).val());
           })
           $("#show_print_margin").change(function() {
                   acen_edit.renderer.setShowPrintMargin(this.checked);
           })


}