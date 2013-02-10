/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/
 
 /**
 * Content assist for Ruby on Rails.
 * Static content provider.
 */
var ControlFlowContentProvider = (function() {
	
	function ControlFlowContentProvider() {}
	
	ControlFlowContentProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			var whitespace = this._leadingWhitespace(buffer, offset);
			var prefix = context.prefix;
			var keywords = [];
		
			/* if then instruction */
			if("if".indexOf(prefix) === 0){
				var proposal = "if condition then\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "if - if-then block",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* if-then-else instruction */
			if("if".indexOf(prefix) === 0){
				var proposal = "if condition then\n" + whitespace + "\t\n" + whitespace + "else\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "if - if-then-else block",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* if condition : statement instruction */
			if("if".indexOf(prefix) === 0){
				var proposal = "if condition : statement end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "if - if condition : statement",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}, 
								{offset: offset + proposal.indexOf("statement"), length: "statement".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* unless then instruction */
			if("unless".indexOf(prefix) === 0){
				var proposal = "unless condition then\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "unless - unless-then block",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* unless-then-else instruction */
			if("unless".indexOf(prefix) === 0){
				var proposal = "unless condition then\n" + whitespace + "\t\n" + whitespace + "else\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "unless - unless-then-else block",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* unless condition : statement instruction */
			if("unless".indexOf(prefix) === 0){
				var proposal = "unless condition : statement end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "unless - unless condition : statement",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}, 
								{offset: offset + proposal.indexOf("statement"), length: "statement".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* case-when instruction */
			if("case".indexOf(prefix) === 0){
				var proposal = "case variable\n" + whitespace + "when condition\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "case - case-when block",
					positions : [{offset: offset + proposal.indexOf("variable"), length: "variable".length}, 
								{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			
			/* while-do instruction */
			if("while".indexOf(prefix) === 0){
				var proposal = "while condition do\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "while - while-do loop",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* until-do instruction */
			if("until".indexOf(prefix) === 0){
				var proposal = "until condition do\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "until - until-do loop",
					positions : [{offset: offset + proposal.indexOf("condition"), length: "condition".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* for-in instruction */
			if("for".indexOf(prefix) === 0){
				var proposal = "for element in collection\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "for - for-in loop",
					positions : [{offset: offset + proposal.indexOf("element"), length: "element".length},
								{offset: offset + proposal.indexOf("collection"), length: "collection".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* begin block */
			if("begin".indexOf(prefix) === 0){
				var proposal = "begin\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "begin - begin block",
					positions : [],
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

	return ControlFlowContentProvider;
}());