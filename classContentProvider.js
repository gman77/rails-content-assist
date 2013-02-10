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
			
			return keywords;
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