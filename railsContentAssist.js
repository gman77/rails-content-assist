/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/

/**
 * Content assist for Ruby on Rails.
 */
var RailsContentAssistProvider = (function() {

	function RailsContentAssistProvider() {}
	
	RailsContentAssistProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			
			var proposals = [];
			
			/* add control flow keywords */
			proposals = proposals.concat(this._addControlFlowKeywords(buffer, offset, context));
			
			/* add static keywords */
			proposals = proposals.concat(this._addStaticKeywords(buffer, offset, context));
			
			return proposals;
		},
		
		_addControlFlowKeywords : function(buffer, offset, context){
			var whitespace = this._leadingWhitespace(buffer, offset);
			var prefix = context.prefix;
			var keywords = [];
		
			/* simple if then instruction */
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
			
			/* simple if-then-else instruction */
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
			
			return keywords;
		},
		
		/*
		 *	Returns an array of static ruby and rails keywords.
		 */
		_addStaticKeywords : function(buffer, offset, context){
			/* ruby restricted keywords */
			var rubyKeywords = ["BEGIN","END","__ENCODING__","__END__","__FILE__","__LINE__","alias","and","begin",
				"break","case","class","def","defined?","do","else","elsif","end","ensure","false","for",
				"if","in","module","next","nil","not","or","redo","rescue","retry","return","self","super",
				"then","true","undef","unless","until","when","while","yield"];
				
			/* rails restricted keywords */
			var railsKeywords = ["ADDITIONAL_LOAD_PATHS","ARGF","ARGV","ActionController","ActionView","ActiveRecord",
			    "ArgumentError","Array","BasicSocket","Benchmark","Bignum","Binding","CGI","CGIMethods","CROSS_COMPILING",
			    "Class","ClassInheritableAttributes","Comparable","ConditionVariable","Config","Continuation","DRb","DRbIdConv",
			    "DRbObject","DRbUndumped","Data","Date","DateTime","Delegater","Delegator","Digest","Dir","ENV","EOFError","ERB",
			    "Enumerable","Errno","Exception","FALSE","FalseClass","Fcntl","File","FileList","FileTask","FileTest","FileUtils",
			    "Fixnum","Float","FloatDomainError","GC","Gem","GetoptLong","Hash","IO","IOError","IPSocket","IPsocket","IndexError",
			    "Inflector","Integer","Interrupt","Kernel","LN_SUPPORTED","LoadError","LocalJumpError","Logger","Marshal","MatchData",
			    "MatchingData","Math","Method","Module","Mutex","Mysql","MysqlError","MysqlField","MysqlRes","NIL","NameError","NilClass",
			    "NoMemoryError","NoMethodError","NoWrite","NotImplementedError","Numeric","OPT_TABLE","Object","ObjectSpace","Observable",
			    "Observer","PGError","PGconn","PGlarge","PGresult","PLATFORM","PStore","ParseDate","Precision","Proc","Process","Queue",
			    "RAKEVERSION","RELEASE_DATE","RUBY","RUBY_PLATFORM","RUBY_RELEASE_DATE","RUBY_VERSION","Rack","Rake","RakeApp","RakeFileUtils",
			    "Range","RangeError","Rational","Regexp","RegexpError","Request","RuntimeError","STDERR","STDIN","STDOUT","ScanError",
			    "ScriptError","SecurityError","Signal","SignalException","SimpleDelegater","SimpleDelegator","Singleton","SizedQueue",
			    "Socket","SocketError","StandardError","String","StringScanner","Struct","Symbol","SyntaxError","SystemCallError",
			    "SystemExit","SystemStackError","TCPServer","TCPSocket","TCPserver","TCPsocket","TOPLEVEL_BINDING","TRUE","Task","Text",
			    "Thread","ThreadError","ThreadGroup","Time","Transaction","TrueClass","TypeError","UDPSocket","UDPsocket","UNIXServer",
			    "UNIXSocket","UNIXserver","UNIXsocket","UnboundMethod","Url","VERSION","Verbose","YAML","ZeroDivisionError"];
			    
			/* magic field names */
			var magicFieldNames = ["created_at","created_on","updated_at","updated_on","lock_version","type","id","position",
				"parent_id","lft","rgt","quote_value","template"];
			
			var keywords = [];
			var prefix = context.prefix;
			
			/* insert ruby restricted keywords */
			for(var i=0; i<rubyKeywords.length; ++i){
				var keyword = rubyKeywords[i];
				if(keyword.indexOf(prefix) === 0){
					keywords.push({
						proposal : keyword.substring(prefix.length, keyword.length),
						description : keyword + " - ruby restricted keyword"
					});
				}
			}
			
			/* insert rails restricted keywords */
			for(var i=0; i<railsKeywords.length; ++i){
				var keyword = railsKeywords[i];
				if(keyword.indexOf(prefix) === 0){
					keywords.push({
						proposal : keyword.substring(prefix.length, keyword.length),
						description : keyword + " - rails restricted keyword"
					});
				}
			}
			
			/* magic field names */
			for(var i=0; i<magicFieldNames.length; ++i){
				var keyword = magicFieldNames[i];
				if(keyword.indexOf(prefix) === 0){
					keywords.push({
						proposal : keyword.substring(prefix.length, keyword.length),
						description : keyword + " - magic field name"
					});
				}
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
	return RailsContentAssistProvider;
}());