/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/
 
 /**
 * Content assist for Ruby on Rails.
 * Static content provider.
 */
var ClassContentProvider = (function() {
	
	function ClassContentProvider() {}
	
	ClassContentProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			var whitespace = this._leadingWhitespace(buffer, offset);
			var prefix = context.prefix;
			var keywords = [];
			
			/* class keyword */
			if("class".indexOf(prefix) === 0){
				var proposal = "class name\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "class - class definition",
					positions : [{offset: offset + proposal.indexOf("name"), length: "name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* def keyword */
			if("def".indexOf(prefix) === 0){
				var proposal = "def method\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "def - method definition",
					positions : [{offset: offset + proposal.indexOf("method"), length: "method".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* hack: add leading @ to given prefix */
			prefix = "@" + prefix;
			
			/* class fields */
			var gatheredFields = this._gatherFields(buffer, prefix);
			for(var i=0; i<gatheredFields.length; ++i){
				var field = gatheredFields[i];
					
				if(field.indexOf(prefix) === 0){
					keywords.push({
						proposal : prefix.length < field.length ? field.substring(prefix.length, field.length) : " ",
						description : field + " - class field"
					});
				}
			}
			
			return keywords;
		},
		
		/**
		 * Gathers all used fields from the given buffer.
		 */
		_gatherFields : function(buffer, prefix){
			var fields = [];
			while(buffer.indexOf("@") !== -1){
				var fieldSubstring = buffer.substring(buffer.indexOf("@"));
				var fieldEndIndex = fieldSubstring.indexOf(" ");
				
				var keyword = fieldSubstring.substring(0, fieldEndIndex);
				if(fields.indexOf(keyword) === -1){	fields.push(keyword); }
				buffer = fieldSubstring.substring(fieldEndIndex);
			}
			
			return fields;
		},
		
		/**
		 * Returns a string of all the whitespace at the start of the current line.
		 * @param {String} buffer The document
		 * @param {Integer} offset The current selection offset
		 */
		_leadingWhitespace : function(buffer, offset) {
			var whitespace = "";
			offset = offset-1;
			while (offset > 0) {
				var c = buffer.charAt(offset--);
				if (c === '\n' || c === '\r') {
					//we hit the start of the line so we are done
					break;
				}
				if (/\s/.test(c)) {
					//we found whitespace to add it to our result
					whitespace = c.concat(whitespace);
				} else {
					//we found non-whitespace, so reset our result
					whitespace = "";
				}
			}
			return whitespace;
		}
	};

	return ClassContentProvider;
}());