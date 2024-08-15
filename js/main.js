$(document).ready(function() {
    let listType;

    $("form").submit(function(e) {
        e.preventDefault();
        
        listType = ($("#ordered-list").prop("checked")) ? "ol" : "ul";
        
        const liTitles = [
            "Clique para riscar",
            "Clique para remover o risco"
        ];
        const liTemplate = `<li title="${liTitles[0]}">${$("#task").val()}</li>`;
        const li = $(liTemplate).on("click", handleClick);

        if (!$("ul, ol").length) {
            const list = $(listType === "ol" ? "<ol></ol>" : "<ul></ul>").append(li);
            $("form").after(list);
        } else {
            if (checkIfListTypeHasChanged()) {
                const items = $("ol, ul").html();

                $("ol, ul").replaceWith((listType === "ul") ? $(`<ul>${items}</ul>`) : $(`<ol>${items}</ol>`));
                $("li").each(function() {
                    $(this).on("click", handleClick);
                });
            }
            li.appendTo($("ul, ol"));
        }
        $("#task").val("");

        function checkIfListTypeHasChanged() {
            return $(listType).length === 0;
        }
    
        function handleClick() {
            $(this).attr("title", ($(this).attr("title") === liTitles[0]) ? liTitles[1] : liTitles[0]);
            $(this).toggleClass("line-through");
        }
    })
})